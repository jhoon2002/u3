<script setup>
import { Field as VeeField, useField } from 'vee-validate'
import RequiredSign from '@/components/form/RequiredSign.vue'
import VSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { computed, reactive, ref } from 'vue'
import http from '@/api/http'
import { getCssVar } from 'quasar'

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    rules: {
        type: Object,
        required: true,
    },
})
const { handleChange, value: fieldValue, errors } = useField(props.name, props.rules)
const inputValue = ref(null)
const options = reactive([])
const modelValue = ref(null)
const model = computed({
    get: () => modelValue.value,
    set: val => {
        if (!val) {
            fieldValue.value = ''
            options.value = []
        }
        modelValue.value = val
    },
})
const isFocus = ref(false)
const Deselect = {
    render: () => null, //삭제(X) 아이콘 사용 안함
    // h(QIcon, { name: 'bi-x', size: 'sm', style: { position: 'absolute', right: 0, top: 0, }, }),
}
const OpenIndicator = {
    render: () => null, //화살표 목록 아이콘 사용 안함
}

const getData = async (val, loading) => {
    inputValue.value = val
    try {
        loading(true)
        const {
            data: { users },
        } = await http.get('/api/users/userid-name/' + val)
        options.value = users.map(item => ({
            value: item.userid,
            label: `${item.name}(${item.birthday})`,
        }))
        console.log(options.value)
    } catch (e) {
        // console.log(e)
    } finally {
        loading(false)
    }
}
const updateValue = e => {
    handleChange(e.value, true)
}
// const plainBorder = {
//     '--vs-border-color': 'rgba(0, 0, 0, 0.24)',
// }
// const errorBorder = {
//     '--vs-border-color': getCssVar('negative'),
// }
const validationBorder = computed({
    get: () => {
        if (errors.value.length > 0) {
            return {
                '--vs-border-color': getCssVar('negative'),
            }
        }
        if (isFocus.value) {
            return {
                '--vs-border-color': getCssVar('primary'),
            }
        }
        return {
            '--vs-border-color': 'rgba(0, 0, 0, 0.24)',
        }
    },
})
</script>
<template>
    <div>
        <vee-field :name="$props.name" :rules="$props.rules" v-slot="{ field, errorMessage, errors }">
            <v-select
                clearable
                :options="options.value"
                :value="field.value"
                v-model="model"
                :components="{ Deselect, OpenIndicator }"
                @option:selected="updateValue"
                @search="getData"
                :style="validationBorder"
            >
                <template v-slot:no-options="{ search, searching }">
                    <span
                        :class="{
                            'text-caption': true,
                            'text-negative': errors.length,
                            'text-primary': !errors.length,
                        }"
                    >
                        <template v-if="searching"> '{{ search }}'에 해당하는 데이터가 없습니다. </template>
                        <template v-else> 검색어(이름) 입력.. </template>
                    </span>
                </template>
                <template v-slot:search="{ attributes, events }">
                    <div
                        :class="{
                            focused: isFocus || model || inputValue,
                            blured: !(isFocus || model || inputValue),
                            tremble: errors.length > 0,
                        }"
                    >
                        {{ $props.name }} <required-sign v-if="$props.rules.required" />
                    </div>
                    <input
                        class="vs__search"
                        v-bind="attributes"
                        v-on="events"
                        style="height: 39px; margin: 15px 0 -4px 2px; color: #212121"
                        @focus="isFocus = true"
                        @blur="isFocus = false"
                    />
                </template>
                <template v-slot:selected-option-container="{ option }">
                    <div style="display: flex; align-items: baseline; margin: 24px 0 0 9px; color: #212121">
                        {{ option.label }}
                    </div>
                </template>
                <template #spinner="{ loading }">
                    <q-spinner-hourglass v-if="loading" color="grey" size="1.5em" />
                </template>
            </v-select>
            <div class="error-message">{{ errorMessage }}</div>
        </vee-field>
    </div>
</template>
<style scoped>
>>> {
    --vs-colors--lightest: rgba(0, 0, 0, 0.24);
    --vs-border-color: var(--vs-colors--lightest);
    --vs-actions-padding: 4px 15px 0 3px;
    --vs-dropdown-option-padding: 8px 20px;
    --vs-dropdown-option--active-bg: #e3e3e3;
    --vs-dropdown-option--active-color: #000000;
    --vs-font-size: 14px;
}
</style>
<style lang="scss" scoped>
.blured {
    position: absolute;
    top: 17px;
    left: 11px;
    font-size: 16px;
    color: #818181;
    transform-origin: left top;
    transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.324s cubic-bezier(0.4, 0, 0.2, 1);
}
.focused {
    position: absolute;
    top: 17px;
    left: 11px;
    font-size: 16px;
    color: $primary;
    //transition: all 0.3s;
    //transform: scale(0.75) translate(-17px, -15px);
    transform-origin: left top;
    transform: translateY(-40%) scale(0.75);
    transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.396s cubic-bezier(0.4, 0, 0.2, 1);
}
.error-message {
    font-size: 12px;
    line-height: 1;
    color: $negative;
    margin: 8px 0 0 12px;
}
.tremble {
    //animation-duration: 1s;
    //animation-timing-function: ease;
    //animation-delay: 0s;
    //animation-iteration-count: 1;
    //animation-direction: normal;
    //animation-fill-mode: none;
    //animation-play-state: running;
    animation: q-field-label 0.36s;
    color: $negative;
}
.error {
    border-color: $negative;
}
</style>
<style>
.vs__dropdown-toggle,
.vs__dropdown-menu {
    /*border-color: var(--vs-border-colors--valid);*/
    /*transition: border 0.3s;*/
}
</style>
