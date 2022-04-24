<script setup>
/*-----------------------------
 *
 *      사용자 리스트(관리자)
 *
 * ----------------------------
 */
import http from '@/api/http.js'
import { computed, onMounted, ref } from 'vue'

const users = ref([])
const pagination = ref({
    sortBy: 'created',
    descending: true,
    page: 1,
    rowsPerPage: 7,
    rowsNumber: 0,
})
const loading = ref(false)

const onRequest = async props => {
    const { page, rowsPerPage, sortBy, descending } = props.pagination

    loading.value = true

    try {
        const {
            data: { users: dbUsers, count: dbCount },
        } = await http.get('/api/users', {
            params: { page: page, rows: rowsPerPage, order: sortBy, desc: descending ? 'true' : '' },
        })
        users.value = dbUsers
        pagination.value.sortBy = sortBy
        pagination.value.descending = descending
        pagination.value.page = page
        pagination.value.rowsPerPage = rowsPerPage
        pagination.value.rowsNumber = dbCount

        users.value.forEach((row, index) => {
            row.index = index
        })
    } catch (e) {
        // console.log(e)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    // get initial data from server (1st page)
    onRequest({
        pagination: pagination.value,
        // filter: undefined,
    })
})
const pagesNumber = computed(() => Math.ceil(pagination.value.rowsNumber / pagination.value.rowsPerPage))

const columns = [
    {
        name: 'index',
        label: 'No',
        align: 'center',
        field: row =>
            pagination.value.rowsNumber - pagination.value.rowsPerPage * (pagination.value.page - 1) - row.index,
    },
    {
        name: 'loginid',
        label: '아이디',
        align: 'left',
        field: row => row.loginid,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'name',
        label: '이름',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'birthday',
        label: '생년월일',
        align: 'left',
        field: row => row.birthday,
        format: val => val.substr(0, 2) + '-' + val.substr(2, 2) + '-' + val.substr(4, 2),
        sortable: true,
    },
    {
        name: 'cellphone',
        label: '휴대폰',
        align: 'left',
        field: row => row.cellphone,
        format: val => val.substr(0, 3) + '-' + val.substr(3, 4) + '-' + val.substr(7, 4),
        sortable: true,
    },
    {
        name: 'email',
        label: '이메일',
        align: 'left',
        field: row => row.email,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'kind',
        label: '신분',
        align: 'left',
        field: row => row.kind,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'belong',
        label: '소속',
        align: 'left',
        field: row => row.belong,
        format: val => `${val}`,
        sortable: true,
    },
    {
        name: 'created',
        label: '생성일',
        align: 'left',
        field: row => row.created,
        format: val => val.substring(0, 10),
        sortable: true,
    },
]

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
<template>
    <q-layout view="hHh lpR fFf">
        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <!-- drawer content -->
        </q-drawer>

        <q-page-container>
            <div>
                <q-table
                    title="사용자"
                    :rows="users"
                    row-key="name"
                    v-model:pagination="pagination"
                    @request="onRequest"
                    :loading="loading"
                    :columns="columns"
                    color="info"
                    hide-pagination
                >
                    <template v-slot:bottom="{ pagination }">
                        <div class="row justify-center q-my-md" style="width: 100%">
                            <q-pagination
                                :model-value="pagination.page"
                                color="grey-8"
                                boundary-numbers
                                unelevated
                                active-color="pink"
                                :max="pagesNumber"
                                :max-pages="10"
                                size="md"
                                @update:model-value="
                                    e =>
                                        onRequest({
                                            pagination: {
                                                sortBy: pagination.sortBy,
                                                descending: pagination.descending,
                                                page: e,
                                                rowsPerPage: pagination.rowsPerPage,
                                                rowsNumber: pagination.rowsNumber,
                                            },
                                        })
                                "
                            />
                        </div>
                    </template>
                </q-table>
            </div>
        </q-page-container>
    </q-layout>
</template>
