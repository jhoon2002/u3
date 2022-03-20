<script setup>
import { ref } from 'vue'
const name = ref('')
</script>
<template>
    <div>
        <q-input label="이름" :modelValue="name" @update:modelValue="event => $emit('update:name', event)" />
    </div>
</template>
