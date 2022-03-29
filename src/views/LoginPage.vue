<script>
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import http from '@/api/http.js'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
    components: {
        VeeForm,
        TextInput,
    },
    setup() {
        const $q = useQuasar()
        const router = useRouter()
        const isPwd = ref(true)

        const submit = async values => {
            const opt = {
                position: 'top',
                timeout: 1000,
                icon: 'bi-bell-fill',
            }
            try {
                await http.post('/api/users/login', {
                    userid: values['아이디'],
                    password: values['암호'],
                })
                $q.notify({
                    message: '로그인 하였습니다.',
                    color: 'primary',
                    ...opt,
                })
                return setTimeout(() => router.push('/'), 500)
            } catch (e) {
                const { status } = e.response
                if (status === 400) {
                    return $q.notify({
                        message: '아이디 또는 암호가 일치하지 않습니다.',
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
                    <div class="text-cyan">사업관리</div>
                    <div class="text-orange">시스템</div>
                </div>
            </div>
            <div class="j-mt-15">
                <vee-form
                    v-slot="{ handleSubmit }"
                    :initial-values="{
                        아이디: 'jhoon',
                        암호: '1111',
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
                        name="암호"
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
