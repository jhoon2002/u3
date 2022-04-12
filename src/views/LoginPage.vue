<script>
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import http from '@/api/http.js'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { reactive, ref, watch } from 'vue'

export default {
    components: {
        VeeForm,
        TextInput,
    },
    setup() {
        const $q = useQuasar()
        const router = useRouter()
        const isPwd = ref(true)
        const signUp = ref(false)
        const agree = reactive({
            agreeAll: false,
            agreeTerm: false,
            agreeInfo: false,
            agreeJumin: false,
        })

        watch(
            () => agree.agreeAll,
            agreeAll => {
                if (agreeAll) {
                    agree.agreeTerm = true
                    agree.agreeInfo = true
                    agree.agreeJumin = true
                } else {
                    agree.agreeTerm = false
                    agree.agreeInfo = false
                    agree.agreeJumin = false
                }
            },
        )

        const submit = async values => {
            const opt = {
                position: 'top',
                timeout: 1000,
                icon: 'bi-bell-fill',
            }
            try {
                await http.post('/api/users/login', {
                    userid: values['아이디'],
                    password: values['비밀번호'],
                })
                $q.notify({
                    message: '로그인 하였습니다.',
                    color: 'primary',
                    ...opt,
                })
                return setTimeout(() => router.push('/'), 500)
            } catch (e) {
                // const { status } = e.response //express
                const { statusCode } = e.response.data
                if (statusCode === 401) {
                    return $q.notify({
                        message: '아이디 또는 비밀번호가 일치하지 않습니다.',
                        color: 'negative',
                        ...opt,
                    })
                }
                return $q.notify({
                    message: '서버 문제로 로그인 할 수 없습니다.',
                    color: 'negative',
                    ...opt,
                })
            }
        }
        return {
            isPwd,
            submit,
            signUp,
            agree,
            slide: ref('style'),
            lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
        }
    },
}
</script>
<template>
    <div
        style="height: 100vh"
        class="flex justify-center items-center animate__animated animate__fadeIn animate__faster back-gra"
    >
        <div>
            <div>
                <div class="text-center">
                    <q-icon
                        name="bi-bar-chart-fill"
                        size="lg"
                        color="grey-9"
                        style="margin: 0 auto 0 auto"
                        class="animate__animated animate__animated animate__bounceInDown"
                    />
                </div>
                <div
                    style="font-size: 1.5rem"
                    class="flex justify-center text-grey-6 q-mt-md text-center animate__animated animate__flipInX animate__slow"
                >
                    <div style="font-family: LeferiPoint-BlackA, sans-serif" class="j-mr-2">한국예술종합학교</div>
                    <div style="font-family: LeferiPoint-BlackA, sans-serif">산학협력단</div>
                </div>
                <div
                    style="font-family: LeferiPoint-BlackA, sans-serif; text-align: center; font-size: 3.5rem"
                    class="flex justify-center j-mt-1 text-grey-7 animate__animated animate__flipInX"
                >
                    <div class="text-cyan">사업</div>
                    <div class="text-green-3">자료</div>
                    <div class="text-cyan">관리</div>
                    <div class="text-orange">시스템</div>
                </div>
            </div>
            <div class="j-mt-15">
                <vee-form
                    v-slot="{ handleSubmit }"
                    :initial-values="{
                        아이디: 'jhoon',
                        비밀번호: '1111',
                    }"
                    style="max-width: 15rem; margin: 0 auto 0 auto"
                >
                    <text-input
                        name="아이디"
                        stack-label
                        :is-required-icon="false"
                        :rules="{ required: true }"
                        @keyup.enter="handleSubmit(submit)"
                    />
                    <text-input
                        name="비밀번호"
                        stack-label
                        :type="isPwd ? 'password' : 'text'"
                        :is-required-icon="false"
                        :rules="{ required: true }"
                        input-style="letter-spacing: 5px"
                        @keyup.enter="handleSubmit(submit)"
                    >
                        <template v-slot:append>
                            <q-icon
                                :name="isPwd ? 'bi-eye-slash' : 'bi-eye'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                            />
                        </template>
                    </text-input>
                    <div class="flex justify-center j-mb-10">
                        <q-btn label="확인" color="grey-7" unelevated class="j-my-6" @click="handleSubmit(submit)" />
                    </div>
                    <div class="flex justify-center">
                        <q-dialog v-model="signUp">
                            <q-card style="width: 600px" class="q-px-md q-pb-md">
                                <q-carousel
                                    v-model="slide"
                                    swipeable
                                    animated
                                    navigation-position="top"
                                    control-color="primary"
                                    navigation
                                    padding
                                    height="600px"
                                >
                                    <q-carousel-slide name="style">
                                        <q-card-section class="q-pl-lg">
                                            <div class="row q-mt-md">
                                                <div class="text-h6 j-pt-1">전체 동의</div>
                                                <q-space />
                                                <q-toggle v-model="agree.agreeAll">
                                                    <template v-slot:default>
                                                        <span :class="agree.agreeAll ? 'text-grey-9' : 'text-grey-5'">
                                                            동의합니다
                                                        </span>
                                                    </template>
                                                </q-toggle>
                                            </div>
                                            <div class="row q-mt-sm">
                                                <div class="text-h6 j-pt-1">
                                                    약관 동의
                                                    <q-badge align="top" color="orange" class="q-pb-xs">필수</q-badge>
                                                </div>
                                                <q-space />
                                                <q-toggle v-model="agree.agreeTerm">
                                                    <template v-slot:default>
                                                        <span :class="agree.agreeTerm ? 'text-grey-9' : 'text-grey-5'">
                                                            동의합니다
                                                        </span>
                                                    </template>
                                                </q-toggle>
                                            </div>
                                            <div class="row">
                                                <q-scroll-area
                                                    style="
                                                        height: 150px;
                                                        width: 550px;
                                                        border: 1px solid #bbbbbb;
                                                        border-radius: 5px;
                                                    "
                                                >
                                                    <div class="q-pa-md text-body2 text-grey-6">
                                                        <p>
                                                            본 약관은 한국예술종합학교 산협력단(이하 '제공자'라 한다.)의
                                                            내부 전산시스템(이하 '본 시스템'이라 한다.) 운영과 관련 하여
                                                            제공자와 사용자의 권리와 의무를 정하는 것을 목적으로 한다.
                                                        </p>
                                                        <p>
                                                            제1조(제공자 의무) 제공자는 본 시스템을 적절하게 제작, 관리,
                                                            운영하여야 하며 사용자의 정보가 노출되지 않도록 보장하여야
                                                            한다.
                                                        </p>
                                                        <p>
                                                            제2조(사용자 의무) 사용자는 본 시스템을 이용함에 있어 다음
                                                            각호의 의무를 진다.
                                                        </p>
                                                        <div class="ml-2">
                                                            <p>
                                                                1. 사용자는 부정한 방법으로 타인의 정보를 이용하여
                                                                사용자 등록을 할 수 없다.
                                                            </p>
                                                            <p>
                                                                2. 사용자는 부정한 방법으로 타인의 권한을 획득하여 본
                                                                시스템을 이용할 수 없다.
                                                            </p>
                                                            <p>
                                                                3. 사용자는 본 시스템을 이용하여 얻은 타인의 정보를 업무
                                                                목적의 범위를 넘어 보관, 유통, 전달, 누설하는 등
                                                                부정하게 취급하지 않아야 한다.
                                                            </p>
                                                            <p>
                                                                4. 사용자는 기타 부정한 방법으로 본 시스템을 이용할 수
                                                                없다.
                                                            </p>
                                                        </div>
                                                        <p>
                                                            제3조(제공자 권리) 제공자는 사용자가 본 약관의 규정을 위반한
                                                            경우, 본 시스템 사용을 제한 또는 금지 시킬 수 있다.
                                                        </p>
                                                        <p>
                                                            제4조(사용자 권리) 사용자는 자신의 개인정보가 보호받을
                                                            권리를 가지며, 제공자가 본 약관의 의무를 위반하여 자신의
                                                            개인정보를 유출한 경우 이에 대한 시정과 배상을 요구할 수
                                                            있다.
                                                        </p>
                                                        <p>
                                                            제5조(민·형사책임) 본 약관의 규정은 당사자의 민사 또는
                                                            형사책임에 영향을 미치지 않는다.
                                                        </p>
                                                        <p>
                                                            제6조(일반규정) 제공자는 산단의 정관, 규정 등 내부 절차에
                                                            따라 본 시스템의 이용과 관련 규정 또는 지침 등을 제정할 수
                                                            있으며, 이때 사용자는 해당 규정 또는 지침에 동의한 것으로
                                                            본다.
                                                        </p>
                                                    </div>
                                                </q-scroll-area>
                                            </div>
                                            <div class="row q-mt-lg">
                                                <div class="text-h6 j-pt-1">
                                                    개인정보 수집 동의
                                                    <q-badge align="top" color="orange" class="q-pb-xs">필수</q-badge>
                                                </div>
                                                <q-space />
                                                <q-toggle v-model="agree.agreeInfo">
                                                    <template v-slot:default>
                                                        <span :class="agree.agreeInfo ? 'text-grey-9' : 'text-grey-5'">
                                                            동의합니다
                                                        </span>
                                                    </template>
                                                </q-toggle>
                                            </div>
                                            <div class="row q-mt-sm">
                                                <div class="text-h6 j-pt-1">
                                                    주민등록번호 수집 동의
                                                    <q-badge align="top" color="orange" class="q-pb-xs">필수</q-badge>
                                                </div>
                                                <q-space />
                                                <q-toggle v-model="agree.agreeJumin">
                                                    <template v-slot:default>
                                                        <span :class="agree.agreeJumin ? 'text-grey-9' : 'text-grey-5'">
                                                            동의합니다
                                                        </span>
                                                    </template>
                                                </q-toggle>
                                            </div>
                                        </q-card-section>
                                        <q-card-actions align="right" class="text-primary">
                                            <q-btn outline label="다음 단계" v-close-popup />
                                        </q-card-actions>
                                    </q-carousel-slide>
                                    <q-carousel-slide name="tv" style="width: 500px">2 </q-carousel-slide>
                                    <q-carousel-slide name="tv" style="width: 500px">3 </q-carousel-slide>
                                </q-carousel>
                            </q-card>
                        </q-dialog>

                        <q-btn label="사용자 등록" flat @click="signUp = true" />
                        <q-btn label="비밀번호 찾기" flat />
                    </div>
                </vee-form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.back-gra {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,e5e5e5+87,dbdbdb+100 */
    background: rgb(255, 255, 255); /* Old browsers */
    background: -moz-radial-gradient(
        center,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, 1) 87%,
        rgba(219, 219, 219, 1) 100%
    ); /* FF3.6-15 */
    background: -webkit-radial-gradient(
        center,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, 1) 87%,
        rgba(219, 219, 219, 1) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, 1) 87%,
        rgba(219, 219, 219, 1) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#dbdbdb',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
