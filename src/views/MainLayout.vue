<template>
    <q-layout view="hHh LpR lff">
        <q-header bordered style="backdrop-filter: blur(1px); background-color: #0000001a" class="text-dark">
            <q-toolbar>
                <q-toolbar-title class="q-pt-xs">
                    <q-icon name="r_hub" class="q-mb-xs q-mr-xs" />
                    한국예술종합학교 산학협력단
                    <q-avatar />
                </q-toolbar-title>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
            </q-toolbar>
        </q-header>

        <q-drawer :width="250" show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <global-nav :items="$router.options.routes[0].children.filter(item => !item.hidden)" />
        </q-drawer>

        <q-page-container>
            <q-page class="q-pa-lg">
                <router-view class="j-fade-in" />
            </q-page>
        </q-page-container>

        <q-footer class="bg-transparent column items-center q-pa-md text-dark">
            <span class="text-body1 q-mb-xs">한국예술종합학교 산학협력단</span>
            <span class="text-caption q-mb-xs">K-Arts Industry Academy Cooperation Foundation</span>
            <span class="text-caption">
                <q-icon name="las la-map-marker" size="xs" />
                서울특별시 성북구 화랑로 32길 146-37
            </span>
        </q-footer>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
import GlobalNav from '@/components/global-nav/GlobalNav.vue'
export default {
    components: { GlobalNav },
    setup() {
        const leftDrawerOpen = ref(false)

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
        }
    },
}
</script>
