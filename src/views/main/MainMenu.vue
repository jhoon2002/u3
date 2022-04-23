<script setup>
import MenuItem from '@/views/main/MenuItem.vue'
import { reactive } from 'vue'

const menus1 = reactive([
    {
        name: '사업 등록',
        path: '/task/basic',
        icon: 'las la-pen',
    },
    {
        name: '사업 조회',
        path: '/list',
        icon: 'las la-th-list',
    },
])
const menus2 = reactive([
    {
        name: '개발 목록',
        path: '/dep-list',
        icon: 'las la-tasks',
    },
    {
        name: '스타일 가이드',
        path: '/design',
        icon: 'las la-brush',
    },
])
</script>
<template>
    <div>
        <menu-item label="일면" to="/" />
        <menu-item label="사업" :menus="menus1" width="150" />
        <menu-item label="사용자" to="/admin/bi" />
        <menu-item label="지원기관" to="/admin/sponsor" />
        <menu-item label="개발" :menus="menus2" width="150" />
    </div>
</template>
