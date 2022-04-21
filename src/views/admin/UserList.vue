<script setup>
/*-----------------------------
 *
 *      사용자 리스트(관리자)
 *
 * ----------------------------
 */
import http from '@/api/http.js'
import { onMounted, reactive, toRefs } from 'vue'
const data = reactive({
    users: [],
})
//reactive 객체에서 한 요소를 추출시에는 toRefs api를 이용해야 반응성 유지
const { users } = toRefs(data)
onMounted(async () => {
    try {
        const { data: users } = await http.post('/api/users', {
            name: 'aaa',
            email: 'bbb',
        })
        data.users = users
        // rows = toRefs(data)
    } catch (e) {
        // console.log(e)
    }
})
</script>
<template>
    <div class="q-pa-md">
        <q-table title="사용자" :rows="users" row-key="name" />
    </div>
</template>
