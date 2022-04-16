<script setup>
import { reactive, ref, toRefs } from 'vue'
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import http from '@/api/http.js'

// const state = reactive({ user: null })
// const { user } = toRefs(state) //구조분해할당 후에 반응성을 유지시키려면 toRefs()를 사용해야함

const user = ref(null)
const proccessed = ref(false)
const hasId = ref(false)

const emit = defineEmits(['next'])

const submit = async values => {
    proccessed.value = true
    try {
        const { data: dbUser } = await http.post('api/users/user', {
            jumin: values['주민등록번호'],
        })
        if (dbUser.loginid) {
            hasId.value = true
            return
        }
        // user.value = dbUser
        emit('next', dbUser)
    } catch (e) {
        // user.value = null
        emit('next', null)
    }
}
</script>
<template>
    <div>
        <q-card-section class="q-pa-lg">
            <div class="text-h6 q-mt-md q-mb-lg">가입 확인</div>
            <vee-form v-slot="{ handleSubmit }">
                <text-input
                    name="주민등록번호"
                    :rules="{ required: true, jumin: true, juminSingle: true }"
                    input-style="letter-spacing: 2px; font-size: 1.1rem"
                    @input="hasId = false"
                />
                <div class="row justify-center">
                    <q-btn outline label="확인" @click="handleSubmit(submit)" class="q-mt-sm" />
                </div>
            </vee-form>
        </q-card-section>
        <q-card-section style="height: 165px">
            <div v-if="hasId" class="animate__animated animate__shakeX animate__fast">
                <div class="text-center text-h5 text-red">"이미 가입한 사용자 입니다."</div>
                <div class="text-center text-body2 q-mt-md">
                    아이디나 비밀번호가 기억나지 않는 경우 <br />
                    로그인 화면에서 '비밀번호 찾기'를 이용하여 주시기 바랍니다.
                </div>
            </div>
        </q-card-section>
        <q-card-actions align="right" class="q-mt-md">
            <q-btn outline label="창닫기" color="negative" @click="$emit('close')" />
        </q-card-actions>
    </div>
</template>
