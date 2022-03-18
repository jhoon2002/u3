<script setup>
import { onMounted, ref } from 'vue'
import http from '@/api/http.js'

const keyword = ref(null)
const keywordRef = ref(null)
const options = ref([])
let timeout = null

onMounted(() => {
    // ref 로 native element 를 가져와서 input 이벤트가 발생할때 model 에 연결된 변수에 값을 저장한다.
    const el = keywordRef.value.getNativeElement()
    el.addEventListener('input', async e => {
        //model
        keyword.value = e.target.value

        //getData
        clearTimeout(timeout)
        timeout = setTimeout(async () => {
            try {
                const {
                    data: { users },
                } = await http.get('/api/users/userid-name/' + e.target.value)
                options.value = users.map(item => item.name + ' ' + item.birthday)
            } catch (e) {
                console.log(e)
            }
        }, 400)
    })
})

// const some = val => {
//     console.log('val', val)
// }
</script>
<template>
    <div class="row">
        <div class="col">
            <q-input ref="keywordRef" :model-value="keyword" label="연구책임자" />
        </div>
        <div class="col">{{ keyword }}</div>
        <div class="col">{{ options }}</div>
        <div class="col" />
    </div>
</template>
