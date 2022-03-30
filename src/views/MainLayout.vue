<script>
import { reactive, ref } from 'vue'
import GlobalNav from '@/components/global-nav/GlobalNav.vue'
// import { useQuasar } from 'quasar'
import http from '@/api/http.js'
export default {
    components: { GlobalNav },
    setup() {
        const leftDrawerOpen = ref(false)
        // const $q = useQuasar()

        const name = ref(import.meta.env.VITE_NAME)

        const weatherData = reactive({})

        const getWeather = async () => {
            weatherData.value = await http.get(
                'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst',
                {
                    serviceKey:
                        '4As68KQ2DmnVzFzetnJTngZrv8t4nHP7vl%2FUTMp2HotAwi2wNFgM0638N89OiFhFpyJppBX6w62%2BAaj24I4obQ%3D%3D',
                    pageNo: 1,
                    numOfRows: 1000,
                    dataType: 'JSON',
                    base_date: '20220330',
                    base_time: '1700',
                    nx: 61,
                    ny: 128,
                },
            )
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
            name,
            getWeather,
            weatherData,
        }
    },
}
</script>
<template>
    <q-layout view="lHh LpR lff" class="animate__animated animate__fadeIn animate__faster">
        <q-header bordered style="backdrop-filter: blur(3px); background-color: #0000002a">
            {{ name }}
            <q-toolbar>
                <q-toolbar-title
                    class="q-pt-xs row justify-between"
                    :class="$q.dark.mode ? 'text-white' : 'text-black'"
                >
                    <div class="animated fadeIn">
                        <q-btn dense flat round icon="menu" class="j-mb-1" @click="toggleLeftDrawer" />
                        <span class="text-h5 j-ml-5">{{ $route.name }}</span>
                    </div>
                    <div class="flex">
                        <div class="j-mr-3">
                            {{ weatherData }}
                            <q-btn flat dense label="지금날씨" @click="getWeather" />
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
            <global-nav :items="$router.options.routes.filter(item => item.path === '/')[0].children" />
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
