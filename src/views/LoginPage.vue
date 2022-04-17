<script>
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import http from '@/api/http.js'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import AgreeForm from '@/views/user/AgreeForm.vue'
import CheckJuminForm from '@/views/user/CheckJuminForm.vue'
import UserForm from '@/views/user/UserForm.vue'

export default {
    components: {
        CheckJuminForm,
        VeeForm,
        TextInput,
        AgreeForm,
        UserForm,
    },
    setup() {
        const $q = useQuasar()
        const router = useRouter()
        const submit = async values => {
            const opt = {
                position: 'top',
                timeout: 1000,
                icon: 'bi-bell-fill',
            }
            try {
                await http.post('/api/users/login', {
                    loginid: values['아이디'],
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
        const user = ref(null)
        const carousel = ref(null)
        const signUp = ref(false)
        return {
            carousel,
            submit,
            signUp,
            user,
            isPwd: ref(true),
            slide: ref('agree'),
            agree: reactive({
                all: null,
                term: null,
                info: null,
                jumin: null,
            }),
            bindAndNext: e => {
                user.value = e
                carousel.value.next()
            },
            closeAndGoTo: () => {
                signUp.value = false
                carousel.value.goTo('agree')
            },
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
                        비밀번호: 'jhoon',
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
                </vee-form>
                <div class="flex justify-center">
                    <q-dialog no-esc-dismiss no-backdrop-dismiss v-model="signUp">
                        <q-card style="width: 600px">
                            <q-card-section class="row q-pt-md q-px-lg j-pb-0">
                                <div class="text-h4 q-mt-sm">사용자 등록</div>
                                <div class="row q-ml-lg q-mt-md">
                                    <q-icon
                                        :name="
                                            slide === 'agree' ? 'mdi-numeric-1-circle' : 'mdi-numeric-1-circle-outline'
                                        "
                                        size="sm"
                                        color="grey-7"
                                    /><!--class="cursor-pointer"
                                        @click="$refs.carousel.goTo('agree')"-->
                                    <q-icon
                                        :name="
                                            slide === 'check' ? 'mdi-numeric-2-circle' : 'mdi-numeric-2-circle-outline'
                                        "
                                        size="sm"
                                        color="grey-7"
                                    />
                                    <q-icon
                                        :name="
                                            slide === 'form' ? 'mdi-numeric-3-circle' : 'mdi-numeric-3-circle-outline'
                                        "
                                        size="sm"
                                        color="grey-7"
                                    />
                                </div>
                                <q-space />
                                <q-btn round flat icon="close" size="md" @click="closeAndGoTo" />
                            </q-card-section>
                            <q-carousel
                                v-model="slide"
                                swipeable
                                animated
                                navigation-position="top"
                                control-color="primary"
                                padding
                                height="500px"
                                ref="carousel"
                            >
                                <q-carousel-slide name="agree">
                                    <agree-form @next="$refs.carousel.next()" />
                                </q-carousel-slide>
                                <q-carousel-slide name="check">
                                    <check-jumin-form @next="bindAndNext" @close="closeAndGoTo" />
                                </q-carousel-slide>
                                <q-carousel-slide name="form">
                                    <user-form :user="user" />
                                </q-carousel-slide>
                            </q-carousel>
                        </q-card>
                    </q-dialog>

                    <q-btn label="사용자 등록" flat @click="signUp = true" />
                    <q-btn label="비밀번호 찾기" flat />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.tremble {
    //animation-duration: 1s;
    //animation-timing-function: ease;
    //animation-delay: 0s;
    //animation-iteration-count: 1;
    //animation-direction: normal;
    //animation-fill-mode: none;
    //animation-play-state: running;
    animation: q-field-label 0.36s;
    color: $negative;
}
</style>
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
