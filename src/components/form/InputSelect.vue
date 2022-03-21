<script setup>
import { Field as VeeField, useField } from 'vee-validate'
import RequiredSign from '@/components/form/RequiredSign.vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { reactive, ref } from 'vue'
import http from '@/api/http'
// import JsonViewer from 'vue-json-viewer'

const inputClass = ref('blured')
const inputValue = ref('')
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

const options = reactive([])

const getData = async e => {
    console.log('---------//--------')
    const val = e.target.value
    try {
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
    }
}

const { handleChange } = useField(props.name, props.rules)

const updateValue = e => {
    console.log('---------//--------')
    handleChange(e.value, true)
}
const deleteValue = () => {
    console.log('---------//--------')
    handleChange('', true)
}
</script>
<template>
    <div>
        <vee-field :name="$props.name" :rules="$props.rules" v-slot="{ field, errorMessage, errors }">
            <v-select
                clearable
                :options="options.value"
                :value="field.value"
                @input="getData"
                @option:selected="updateValue"
            >
                <template v-slot:no-options="{ search, searching }">
                    <template v-if="searching">
                        <span class="text-negative">'{{ search }}'에 해당하는 데이터가 없습니다. </span>
                    </template>
                    <span v-else class="text-primary">찾는 이름 입력</span>
                </template>
                <template v-slot:search="{ attributes, events }">
                    <div :class="inputClass">사업명(공식) <required-sign v-if="rules.required" /></div>
                    <input
                        class="vs__search"
                        v-bind="attributes"
                        v-on="events"
                        v-model="inputValue"
                        style="height: 39px; margin: 15px 0 -4px 2px; color: #212121"
                        @focus="inputClass = 'focused'"
                        @blur="inputValue ? (inputClass = 'focused') : (inputClass = 'blured')"
                    />
                </template>
                <template v-slot:selected-option="{ label }">
                    <div
                        style="
                            display: flex;
                            align-items: baseline;
                            margin: 16px 0 0 3px;
                            color: #212121;
                            border: 1px solid grey;
                            border-radius: 5px;
                            padding: 0 4px 0 4px;
                            background: #e8e8e8;
                        "
                    >
                        {{ label }}
                    </div>
                </template>
            </v-select>
            {{ errorMessage }}
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
    top: 15px;
    left: 12px;
    font-size: 16px;
    color: #818181;
    transition: all 0.3s;
}
.focused {
    position: absolute;
    top: 8px;
    left: 11px;
    font-size: 12px;
    color: $primary;
    transition: all 0.3s;
}
</style>
