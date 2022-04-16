<script setup>
import { defineProps, toRefs } from 'vue'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
const props = defineProps({
    user: Object,
})
// const { user } = toRefs(props)
// console.log('this.props.user', props.user)
const submit = values => {
    console.log(values)
}
</script>
<template>
    <vee-form
        v-slot="{ handleSubmit, resetForm }"
        :initial-values="{
            이름: user.value ? user.value.name : '',
            휴대폰: user.value ? user.value.cellphone : '',
            이메일: user.value ? user.value.email : '',
            신분: '교원(전임)',
            소속: '음악원',
        }"
    >
        <q-card-section class="q-pa-lg">
            <div class="row q-gutter-lg">
                <text-input name="아이디" :rules="{ required: true, id: true }" class="col" />
                <text-input name="이름" :rules="{ required: true, min: 2, max: 10 }" class="col" />
            </div>
            <div class="row q-gutter-lg">
                <text-input name="비밀번호" :rules="{ required: true }" class="col" />
                <text-input name="비밀번호 확인" :rules="{ required: true }" class="col" />
            </div>
            <div class="row q-gutter-lg">
                <text-input name="휴대폰" :rules="{ required: true, cellphone: true }" class="col" />
                <text-input name="이메일" :rules="{ required: true, email: true }" class="col" />
            </div>
            <div class="row q-gutter-lg">
                <vee-field name="신분" v-slot="{ handleChange, value }">
                    <q-select
                        label="신분"
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
                        :model-value="value"
                        @update:model-value="handleChange"
                        class="col"
                    />
                </vee-field>
                <vee-field name="소속" v-slot="{ handleChange, value }">
                    <q-select
                        label="소속"
                        :options="['학교 본부', '음악원', '연극원', '영상원', '무용원', '미술원', '전통예술원', '외부']"
                        :model-value="value"
                        @update:model-value="handleChange"
                        class="col"
                    />
                </vee-field>
            </div>
        </q-card-section>
        <q-card-actions align="right">
            <q-btn outline label="창닫기" color="negative" @click="$emit('close')" />
            <q-btn outline label="초기화" color="warning" @click="resetForm" />
            <q-btn outline label="확인" color="primary" @click="handleSubmit(submit)" />
        </q-card-actions>
    </vee-form>
</template>
