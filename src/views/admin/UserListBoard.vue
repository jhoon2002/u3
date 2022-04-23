<script>
/*-----------------------------
 *
 *      사용자 리스트(관리자)
 *
 * ----------------------------
 */
import http from '@/api/http.js'
import { reactive, ref } from 'vue'

export default {
    name: 'UserListBoard',
    async setup() {
        const users = ref([])
        const initialPagination = reactive({
            sortBy: 'desc',
            descending: false,
            page: 1,
            rowsPerPage: 10,
            rowsNumber: 0,
        })
        try {
            const {
                data: { users: dbUsers, count: dbCount },
            } = await http.get('/api/users', {
                params: { page: initialPagination.page, rows: initialPagination.rowsPerPage },
            })
            users.value = dbUsers
            initialPagination.rowsNumber = dbCount
            console.log('1)', initialPagination.rowsNumber)
            // rows = toRefs(data)
        } catch (e) {
            // console.log(e)
        }

        // initialPagination.rowsNumber = 101

        console.log(users.value)
        console.log('2)', initialPagination)

        return {
            users,
            initialPagination,
            updateInitialPagination: e => {
                initialPagination.sortBy = e.pagination.sortBy
                initialPagination.descending = e.pagination.descending
                initialPagination.page = e.pagination.page
                initialPagination.rowsPerPage = e.pagination.rowsPerPage
                initialPagination.rowsNumber = e.pagination.rowsNumber
            },
        }
    },
}
</script>
<template>
    <div class="q-pa-md">
        <q-table
            title="사용자"
            :rows="users"
            row-key="name"
            :pagination="initialPagination"
            @request="updateInitialPagination"
        />
        {{ initialPagination }}
    </div>
</template>
