<script>
export default {
    name: 'GlobalNav',
    inheritAttrs: false,
    customOptions: {},
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
<script setup>
// import { ref, getCurrentInstance } from 'vue'
import GlobalNav from '@/components/global-nav/GlobalNav.vue'

// defineProps({
//     items: {
//         type: Array,
//         required: true,
//     },
// })
// const emit = defineEmits(['change', 'delete'])
// const route = getCurrentInstance().appContext.config.globalProperties.$route

// console.log(route.matched.map(item => item.path))
// console.log('app.appContext.config.globalProperties', app.appContext.config.globalProperties)
// const activeClass = path => {
//     console.log(path)
//     // console.log(route.matched.filter(item => path === item.path).length > 0)
//     return route.matched.filter(item => path === item.path).length > 0 ? 'expand-active' : null
// }
// const matched = computed(() => route.matched.map(item => item.path))
// const matched = ref(route.matched.map(item => item.path))
</script>
<template>
    <q-list>
        <template v-for="item in items">
            <q-expansion-item
                v-if="item.children"
                :key="item.path"
                :label="item.name"
                :content-inset-level="0.2"
                class="text-body1"
            >
                <template v-slot:header>
                    <q-item-section>
                        <q-item-label
                            :class="
                                $route.matched.map(i => i.path).filter(i => i === item.path).length > 0
                                    ? 'expand-active'
                                    : null
                            "
                        >
                            {{ item.name }}
                        </q-item-label>
                    </q-item-section>
                </template>
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

<style lang="scss" scoped>
.expand-active {
    color: $primary;
}
</style>
