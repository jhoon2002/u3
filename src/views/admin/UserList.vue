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
const { users } = toRefs(data)
onMounted(async () => {
    try {
        const { data: users } = await http.get('/api/users')
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
