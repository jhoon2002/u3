<script setup>
import { getCurrentInstance } from 'vue'
import GlobalNav from '@/components/global-nav/GlobalNav.vue'

defineProps({
    items: {
        type: Array,
        required: true,
    },
})
// const emit = defineEmits(['change', 'delete'])
const app = getCurrentInstance()
const route = app.appContext.config.globalProperties.$route
// console.log(route.matched.map(item => item.path))
// console.log('app.appContext.config.globalProperties', app.appContext.config.globalProperties)
const activeClass = path => {
    console.log(path)
    // console.log(route.matched.filter(item => path === item.path).length > 0)
    return route.matched.filter(item => path === item.path).length > 0 ? 'expand-active' : null
}
</script>
<template>
    <q-list>
        <template v-for="item in items">
            <q-expansion-item
                v-if="item.children"
                expand-separator
                :key="item.path"
                :label="item.name"
                :content-inset-level="0.2"
                :class="activeClass(item.path)"
                class="text-body1"
            >
                <global-nav :items="item.children" />
            </q-expansion-item>
            <q-item v-else :key="item.path" :to="item.path">
                <q-item-section>
                    <q-item-label class="text-body1">{{ item.name }}</q-item-label>
                </q-item-section>
            </q-item>
        </template>
    </q-list>
</template>

<style>
.expand-active {
    color: red;
}
</style>
