<script setup>
import { Field as VeeField, useField } from 'vee-validate'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { reactive, ref } from 'vue'
import http from '@/api/http'
// import JsonViewer from 'vue-json-viewer'

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
                    <input maxlength="1" class="vs__search" v-bind="attributes" v-on="events" style="height: 46px" />
                </template>
            </v-select>
            {{ errorMessage }}
        </vee-field>
    </div>
</template>
<style scoped>
>>> {
    --vs-actions-padding: 4px 15px 0 3px;
    --vs-dropdown-option-padding: 8px 20px;
    --vs-dropdown-option--active-bg: #e3e3e3;
    --vs-dropdown-option--active-color: #000000;
}
</style>
