<script>
import { ref } from 'vue'
import GlobalNav from '@/components/global-nav/GlobalNav.vue'
// import { useQuasar } from 'quasar'
import http from '@/api/http.js'
import MainMenu from '@/views/main/MainMenu.vue'

export default {
    components: { GlobalNav, MainMenu },
    setup() {
        // const weather = ref([])
        // const cloudyIcon = computed({
        //     get: () => {},
        // })

        //TODO: 날씨 개발 중단... 만약 향후, 아래 코드를 이용한다면 ret에서 item.baseDate === now 이 조건에 추가하여
        // item.baseTime === nowTIme 를 검사한 결과만 취합하는 것으로 보완해야한다.
        // onMounted(async () => {
        //     const now = new Date().toISOString().split('T')[0].replaceAll(/-/g, '')
        //     const ret = await http.get('/api/weather')
        //     weather.value = ret.data.data.body.items.item
        //         .filter(item => item.baseDate === now && (item.category === 'SKY' || item.category === 'TMP'))
        //         .map(item => ({
        //             category: item.category,
        //             value: item.fcstValue,
        //         }))
        // })

        // console.log(weather)

        const leftDrawerOpen = ref(false)
        // const $q = useQuasar()

        const name = ref(import.meta.env.VITE_NAME)

        const hlogin = async () => {
            // console.log('hlogin....')

            //curl -X POST https://api.hiworks.com/office/sso/validate/tmpkey -H "Authorization: Bearer f75e862f18fdb8f071a36c9ff9010b72" -H "Content-Type: application/json"
            const ret = await http.post(
                'https://api.hiworks.com/office/sso/validate/tmpkey',
                {},
                {
                    headers: {
                        Authorization: 'Bearer f75e862f18fdb8f071a36c9ff9010b72', //Zjc1ZTg2MmYxOGZkYjhmMDcxYTM2YzlmZjkwMTBiNzI=
                        'Content-Type': 'application/json',
                    },
                },
            )
            console.log('ret', ret)
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
            name,
            hlogin,
        }
    },
}
</script>
<template>
    <q-layout view="lHh LpR lff" class="animate__animated animate__fadeIn animate__faster">
        <q-header bordered style="backdrop-filter: blur(0px); background-color: #0000002a">
            {{ name }}
            <q-toolbar>
                <q-toolbar-title class="row justify-between" :class="$q.dark.mode ? 'text-white' : 'text-black'">
                    <div class="row">
                        <div class="animated fadeIn row">
                            <q-btn
                                dense
                                flat
                                round
                                icon="menu"
                                style="height: 28px; margin-top: 9px"
                                @click="toggleLeftDrawer"
                            />
                            <!--
                            <div class="text-h5 j-ml-5" style="margin-top: 11px; width: 150px">
                                {{ $route.name }}
                            </div>
                            -->
                        </div>
                        <main-menu class="q-ml-md" />
                    </div>
                    <div class="flex j-mt-2">
                        <div class="j-mr-3">
                            <q-btn flat dense label="하이웍스 로그인" @click="hlogin" />
                            <q-btn flat dense label="마이페이지" />
                            <q-btn flat dense label="로그아웃" @click="$router.push('/login')" />
                        </div>
                        <div>
                            <q-btn
                                dense
                                flat
                                round
                                :icon="$q.dark.mode ? 'las la-moon' : 'las la-sun'"
                                @click="$q.dark.toggle()"
                            />
                        </div>
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-drawer :width="250" show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <q-icon style="font-size: 7rem; position: absolute; left: -40px; top: 500px" color="grey-3" />
            <!-- 사업관리시스템
            <div
                v-ripple:grey-7
                class="q-px-md q-pt-md q-pb-sm relative-position cursor-pointer"
                @click="$router.push('/')"
            >
                <q-icon
                    name="bi-bar-chart-fill"
                    color="grey-9"
                    style="font-size: 0.9rem; top: 1rem; left: 11.9rem"
                    class="absolute text-grey animate__animated animate__animated animate__bounceInDown"
                />
                <div class="j-ml-1">
                    <div
                        style="
                            font-family: LeferiPoint-BlackA, sans-serif;
                            font-size: 0.8rem;
                            padding-left: 0.1rem;
                            animation-delay: 0.2s;
                        "
                        class="text-grey-7 animate__animated animate__flipInX"
                    >
                        한국예술종합학교 산학협력단
                    </div>
                    <div
                        style="font-family: LeferiPoint-BlackA, sans-serif; font-size: 1.7rem; animation-delay: 0.2s"
                        class="animate__animated animate__flipInX"
                    >
                        <span class="text-cyan">사업관리</span>
                        <span class="text-orange">시스템</span>
                    </div>
                </div>
            </div>
            -->
            <div
                v-ripple:grey-7
                class="q-px-md q-pt-md q-pb-sm relative-position cursor-pointer"
                @click="$router.push('/')"
            >
                <q-icon
                    name="bi-bar-chart-fill"
                    color="grey-9"
                    style="font-size: 0.9rem; top: 1rem; left: 12.6rem"
                    class="absolute text-grey animate__animated animate__animated animate__bounceInDown"
                />
                <div class="j-ml-1">
                    <div
                        style="
                            font-family: LeferiPoint-BlackA, sans-serif;
                            font-size: 0.85rem;
                            padding-left: 0.1rem;
                            animation-delay: 0.2s;
                        "
                        class="text-grey-7 animate__animated animate__flipInX"
                    >
                        한국예술종합학교 산학협력단
                    </div>
                    <div
                        style="font-family: LeferiPoint-BlackA, sans-serif; font-size: 1.4rem; animation-delay: 0.2s"
                        class="animate__animated animate__flipInX"
                    >
                        <span class="text-cyan">사업</span>
                        <span class="text-green-3">정보</span>
                        <span class="text-cyan">관리</span>
                        <span class="text-orange">시스템</span>
                    </div>
                </div>
            </div>
            <!--<global-nav :items="$router.options.routes.filter(item => item.path === '/')[0].children" />-->
            <!--            <component :is=""></component>-->
            <router-view v-slot="{ route }">
                <component :is="route.sideComponent"></component>
            </router-view>
        </q-drawer>

        <q-page-container>
            <q-page class="q-pa-lg bg-grey-4">
                <router-view class="animate__animated animate__fadeIn animate__faster" />
            </q-page>
        </q-page-container>

        <q-footer class="bg-grey-9 column items-center q-pa-md text-light">
            <span style="font-size: 1rem; color: #ffffff9a" class="text-body1 q-mb-xs text-weight-regular">
                한국예술종합학교 산학협력단
            </span>
            <span style="color: #ffffff9a" class="text-caption">
                <q-icon name="las la-map-marker" style="font-size: 0.8rem" />
                서울특별시 성북구 화랑로 32길 146-37
            </span>
        </q-footer>
    </q-layout>
</template>
<style scoped>
/*.animate__animated.animate__slideInLeft {*/
/*    --animate-duration: 0.1s;*/
/*    --animate-delay: 0;*/
/*}*/
</style>
