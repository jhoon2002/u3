<script setup>
import { ref, reactive } from 'vue'
const count = ref({ c: 0, name: '회원 카운터' })
const count2 = reactive({ c: 0, name: '리액티브 카운터' })

const manu = num => {
    count.value.c = num
}
const manu2 = num => {
    count2.c = num
}
</script>

<template>
    <div class="q-mb-lg">
        <div>{{ count.name }}: {{ count.c }}</div>
        <q-btn label="카운트 증가" @click="count.c++" />
        <q-btn label="초기화" @click="count.c = 0" />
        <q-btn label="조작" @click="manu(5)" />
    </div>

    <div>
        <div>{{ count2.name }}: {{ count2.c }}</div>
        <q-btn label="카운트 증가" @click="count2.c++" />
        <q-btn label="초기화" @click="count2.c = 0" />
        <q-btn label="조작" @click="manu2(5)" />
    </div>
</template>
