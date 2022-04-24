<script setup>
import MainMenu from '@/views/main/MainMenu.vue'
</script>
<template>
    <q-layout view="hHh lpR fFf"
        ><!--style="backdrop-filter: blur(0px); background-color: rgba(0, 23, 23, 0.6)"-->
        <q-header bordered class="text-white bg-brown-7">
            <q-toolbar>
                <div class="row">
                    <q-toolbar-title>
                        <div
                            v-ripple:grey-7
                            class="q-px-md q-pt-md q-pb-sm relative-position cursor-pointer"
                            @click="$router.push('/')"
                        >
                            <q-icon
                                name="bi-bar-chart-fill"
                                color="white"
                                style="font-size: 0.9rem; top: 1rem; left: 12.6rem"
                                class="absolute animate__animated animate__animated animate__bounceInDown"
                            />
                            <div class="j-ml-1">
                                <div
                                    style="
                                        font-family: LeferiPoint-BlackA, sans-serif;
                                        font-size: 0.83rem;
                                        padding-left: 0.1rem;
                                        animation-delay: 0.2s;
                                    "
                                    class="text-grey-4 animate__animated animate__flipInX"
                                >
                                    한국예술종합학교 산학협력단
                                </div>
                                <div
                                    style="
                                        font-family: LeferiPoint-BlackA, sans-serif;
                                        font-size: 1.4rem;
                                        animation-delay: 0.2s;
                                    "
                                    class="animate__animated animate__flipInX"
                                >
                                    <span class="text-cyan">사업</span>
                                    <span class="text-green-3">정보</span>
                                    <span class="text-cyan">관리</span>
                                    <span class="text-orange">시스템</span>
                                </div>
                            </div>
                        </div>
                    </q-toolbar-title>
                    <div>
                        <div style="height: 20px"></div>
                        <main-menu class="q-ml-md" />
                        <!--                        <q-tabs align="left">
                            <q-route-tab to="/task/basic" label="사업" />
                            <q-route-tab to="/admin/bi" label="사용자" />
                            <q-btn-dropdown auto-close stretch flat label="개발">
                                <q-list>
                                    <q-item clickable to="/dep-list">
                                        <q-item-section>개발 목록</q-item-section>
                                    </q-item>

                                    <q-item clickable to="/design">
                                        <q-item-section>스타일 가이드</q-item-section>
                                    </q-item>
                                </q-list>
                            </q-btn-dropdown>
                        </q-tabs>-->
                    </div>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <q-page class="bg-grey-4">
                <router-view class="animate__animated animate__fadeIn animate__faster" />
            </q-page>
        </q-page-container>

        <q-footer bordered class="text-white" style="backdrop-filter: blur(0px); background-color: #0000009a">
            <q-toolbar>
                <div class="row items-center">
                    <q-toolbar-title>
                        <span style="font-size: 1rem; color: #ffffff9a" class="text-body1 q-mb-xs text-weight-regular">
                            한국예술종합학교 산학협력단 사업정보관리시스템
                        </span>
                    </q-toolbar-title>
                    <div class="q-mt-xs">
                        <span style="color: #ffffff9a" class="text-caption">
                            <q-icon name="las la-map-marker" style="font-size: 0.8rem" />
                            서울특별시 성북구 화랑로 32길 146-37
                        </span>
                    </div>
                </div>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>
