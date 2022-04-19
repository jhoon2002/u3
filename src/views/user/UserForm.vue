<script setup>
import { defineProps, ref, toRefs } from 'vue'
import { useField, useForm } from 'vee-validate'
import JInput from '@/components/form/JInput.vue'
import RequiredSign from '@/components/form/RequiredSign.vue'
import http from '@/api/http.js'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
    user: Object,
    jumin: String,
})
const emit = defineEmits(['close'])
const { user: preUser } = toRefs(props)

const {
    handleSubmit,
    resetForm,
    values: allValues,
} = useForm({
    initialValues: {
        이름: preUser.value ? preUser.value.name : '',
        휴대폰: preUser.value ? preUser.value.cellphone : '',
        이메일: preUser.value ? preUser.value.email : '',
        신분: preUser.value ? preUser.value.kind : '교원(전임)',
        소속: preUser.value ? preUser.value.belong : '음악원',
    },
})

const { value: name, errorMessage: errorName } = useField('이름', { required: true, min: 2, max: 10 })
const { value: loginid, errorMessage: errorLoginid } = useField('아이디', {
    required: true,
    id: true,
    loginidDuplicated: true,
})
const { value: password, errorMessage: errorPassword } = useField('비밀번호', { password: true })
const { value: passwordConfirm, errorMessage: errorPasswordConfirm } = useField('비밀번호 확인', {
    confirmed: '@비밀번호',
})
const { value: cellphone, errorMessage: errorCellphone } = useField('휴대폰', { required: true, cellphone: true })
const { value: email, errorMessage: errorEmail } = useField('이메일', { required: true, email: true })
const { value: identity, errorMessage: errorIdentity } = useField('신분', { required: true })
const { value: belong, errorMessage: errorBelong } = useField('소속', { required: true })

const onSubmit = handleSubmit(async values => {
    values.juminRaw = props.jumin
    if (preUser) {
        values.userid = preUser.userid
    }
    const opt = {
        position: 'top',
        timeout: 1000,
        icon: 'bi-bell-fill',
    }
    try {
        const { data } = await http.post('/api/users/user', values)
        $q.notify({
            message: '등록하였습니다.',
            color: 'primary',
            ...opt,
        })
        emit('close')
        return
    } catch (e) {
        // console.log(e)
        return $q.notify({
            message: '등록하지 못했습니다. 관리자에게 문의하여 주시기 바랍니다.',
            color: 'negative',
            ...opt,
        })
    }
})

const isPwd = ref(true)
const isPwd2 = ref(true)
</script>
<template>
    <form @submit="onSubmit">
        <q-card-section class="q-pa-lg q-pt-xl scroll" style="max-height: 380px; min-height: 380px">
            <div class="row q-gutter-lg">
                <j-input label="아이디" v-model="loginid" :error-message="errorLoginid" required-sign class="col" />
                <j-input
                    label="이름"
                    v-model="name"
                    :error-message="errorName"
                    required-sign
                    :disable="!!user"
                    class="col"
                />
            </div>
            <div class="row q-gutter-lg">
                <j-input
                    label="비밀번호"
                    v-model="password"
                    :type="isPwd ? 'password' : 'text'"
                    :error-message="errorPassword"
                    input-style="letter-spacing: 3px"
                    required-sign
                    class="col"
                >
                    <template v-slot:append>
                        <q-icon
                            :name="isPwd ? 'bi-eye-slash' : 'bi-eye'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd"
                        />
                    </template>
                </j-input>
                <j-input
                    label="비밀번호 확인"
                    v-model="passwordConfirm"
                    :type="isPwd2 ? 'password' : 'text'"
                    :error-message="errorPasswordConfirm"
                    input-style="letter-spacing: 3px"
                    required-sign
                    class="col"
                >
                    <template v-slot:append>
                        <!--'bi-eye-slash' : 'bi-eye'-->
                        <q-icon
                            :name="isPwd2 ? 'bi-eye-slash' : 'bi-eye'"
                            class="cursor-pointer"
                            @click="isPwd2 = !isPwd2"
                        />
                    </template>
                </j-input>
            </div>
            <div class="row q-gutter-lg">
                <j-input label="휴대폰" v-model="cellphone" :error-message="errorCellphone" required-sign class="col" />
                <j-input label="이메일" v-model="email" :error-message="errorEmail" required-sign class="col" />
            </div>
            <div class="row q-gutter-lg">
                <q-select
                    label="신분"
                    v-model="identity"
                    :options="[
                        '교원(전임)',
                        '교원(비전임)',
                        '학생(재학생)',
                        '학생(졸업생)',
                        '직원(학교)',
                        '직원(산학협력단 본부)',
                        '직원(산학협력단 사업단)',
                        '기타',
                    ]"
                    :error="!!errorIdentity"
                    :error-message="errorIdentity"
                    class="col"
                >
                    <template v-slot:label> 신분 <required-sign name="las la-asterisk" /> </template>
                </q-select>
                <q-select
                    label="소속"
                    v-model="belong"
                    :options="[
                        '학교 본부',
                        '음악원',
                        '연극원',
                        '영상원',
                        '무용원',
                        '미술원',
                        '전통예술원',
                        '산학협력단 본부',
                        '산학협력단 사업단',
                        '외부',
                    ]"
                    :error="!!errorBelong"
                    :error-message="errorBelong"
                    class="col"
                >
                    <template v-slot:label> 소속 <required-sign name="las la-asterisk" /> </template>
                </q-select>
            </div>
        </q-card-section>
        <q-card-actions align="center">
            <q-btn outline label="초기화" color="negative" @click="resetForm" />
            <q-btn type="submit" outline label="확인" color="primary" style="width: 80px" />
        </q-card-actions>
    </form>
</template>
