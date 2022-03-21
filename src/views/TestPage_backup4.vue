<script setup>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { reactive, ref } from 'vue'
import http from '@/api/http'
import JsonViewer from 'vue-json-viewer'

const selectValue = ref(null)
const options = reactive([])

const getData = async e => {
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
        console.log(e)
    }
}
</script>
<template>
    <div>
        <div class="row">
            <div class="col">
                <v-select :options="options.value" :reduce="item => item.value" @input="getData" v-model="selectValue">
                    <template v-slot:no-options="{ search, searching }">
                        <template v-if="searching">
                            <span class="text-negative">'{{ search }}'에 해당하는 데이터가 없습니다. </span>
                        </template>
                        <span v-else class="text-primary">찾는 이름 입력</span>
                    </template>
                </v-select>
            </div>
            <div class="col">
                <json-viewer :value="options.value" :expand-depth="5" copyable boxed sort></json-viewer>
                selectValue: {{ selectValue }}
            </div>
            <div class="col" />
        </div>
    </div>
</template>
