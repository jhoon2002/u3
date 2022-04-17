<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import JInput from '@/components/form/JInput.vue'
import http from '@/api/http.js'

// const state = reactive({ user: null })
// const { user } = toRefs(state) //구조분해할당 후에 반응성을 유지시키려면 toRefs()를 사용해야함

const hasId = ref(false)

const emit = defineEmits(['next'])

const { handleSubmit, values } = useForm()
const { value: jumin, errorMessage } = useField('주민등록번호', { required: true, jumin: true, juminSingle: true })

const submit = async values => {
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

const onSubmit = handleSubmit(submit)
</script>
<template>
    <div>
        <q-card-section class="q-pa-lg">
            <div class="text-h6 q-mt-md q-mb-lg">등록 확인</div>
            <form @submit="onSubmit">
                <j-input
                    label="주민등록번호"
                    v-model="jumin"
                    :error-message="errorMessage"
                    input-style="letter-spacing: 2px; font-size: 1.1rem"
                    @input="hasId = false"
                />
                <div class="row justify-center">
                    <q-btn outline label="다음 단계" color="primary" type="submit" class="q-mt-sm" />
                </div>
            </form>
        </q-card-section>
        <q-card-section style="height: 165px">
            <div v-if="hasId" class="animate__animated animate__shakeX animate__fast">
                <div class="text-center text-h5 text-red">"이미 등록한 사용자 입니다."</div>
                <div class="text-center text-body2 q-mt-md">
                    아이디나 비밀번호가 기억나지 않는 경우 <br />
                    로그인 화면에서 '비밀번호 찾기'를 이용하여 주시기 바랍니다.
                </div>
                <div class="q-mt-lg row justify-center">
                    <q-btn outline label="창닫기" @click="$emit('close')" />
                </div>
            </div>
        </q-card-section>
    </div>
</template>
