<script setup>
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import { ref } from 'vue'
const submit = () => {
    return ''
}
const isPw = ref(true)
</script>
<template>
    <div>
        <vee-form v-slot="{ handleSubmit, resetForm }">
            <div class="text-h3 j-mb-15">
                사람 등록
                <q-btn flat round size="md" icon="bi-arrow-clockwise" color="primary" @click="resetForm()">
                    <q-tooltip
                        anchor="center right"
                        self="center left"
                        :offset="[10, 10]"
                        transition-show="fade"
                        transition-hide="scale"
                    >
                        입력값 초기화
                    </q-tooltip>
                </q-btn>
            </div>

            <div class="row q-gutter-md">
                <text-input name="이름" outlined :rules="{ required: true, min: 4, max: 100 }" class="col" />
                <div class="col" />
                <div class="col" />
                <div class="col" />
            </div>

            <div class="row">
                <text-input
                    name="주민등록번호(앞번호)"
                    outlined
                    stack-label
                    maxlength="6"
                    :rules="{ required: true, min: 6, max: 6 }"
                    style="max-width: 150px"
                    input-style="letter-spacing: 5px"
                    class="col"
                />
                <q-icon name="las la-minus" class="j-mt-8 j-mx-3" />
                <text-input
                    name="뒤첫째"
                    outlined
                    stack-label
                    maxlength="1"
                    :rules="{ required: true, min: 1, max: 1 }"
                    style="max-width: 80px"
                    input-style="text-align: center"
                    class="col j-mr-2"
                />
                <text-input
                    name="나머지번호"
                    outlined
                    :type="isPw ? 'password' : null"
                    stack-label
                    maxlength="6"
                    :rules="{ required: true, min: 6, max: 6 }"
                    style="max-width: 150px"
                    input-style="letter-spacing: 7px"
                    class="col"
                />
                <div class="col" />
            </div>
            <div class="j-mt-15">
                <q-btn outline color="primary" label="저장" @click="handleSubmit(submit)" />
            </div>
        </vee-form>
    </div>
</template>
<style scoped></style>
