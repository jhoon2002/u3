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
            </v-select>
            {{ errorMessage }}
        </vee-field>
    </div>
    <!--            <div class="col">-->
    <!--                <json-viewer :value="options.value" :expand-depth="5" copyable boxed sort></json-viewer>-->
    <!--                selectValue: {{ selectValue }}-->
    <!--            </div>-->
    <!--            <div class="col" />-->
</template>
