<script>
import { Form as VeeForm } from 'vee-validate'
// import { reactive } from 'vue'
import TextInput from '@/components/form/TextInput.vue'
import DateInput from '@/components/form/DateInput.vue'
import RadioInput from '@/components/form/RadioInput.vue'
import { ref } from 'vue'
import NumberInput from '@/components/form/NumberInput.vue'

export default {
    name: 'TaskBasicForm',
    components: {
        RadioInput,
        TextInput,
        VeeForm,
        DateInput,
        NumberInput,
    },
    setup() {
        const submit = values => {
            //form validation pass 시..
            //실패 시는 <vee-form @invalid-submit="" 사용
            return console.log(values)
        }
        return {
            submit,
            aaa: ref(''),
        }
    },
}
</script>
<template>
    <div>
        <vee-form
            ref="veeform"
            v-slot="{ values, handleSubmit, resetForm }"
            :initial-values="{
                사업종류: '산학협력사업',
                부가가치세: '납부',
                국가사업: '비국가',
                e나라도움: '비e나라',
                자체사업: '비자체',
            }"
        >
            <div class="text-h3 j-mb-15">
                기본 정보 등록
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

            <!-- POST 수정시 :initial-values="{ '사업명(사용)': '아무거나' }" -->
            <div class="row q-gutter-md">
                <text-input name="사업명(사용)" outlined :rules="{ required: true, min: 4, max: 100 }" class="col" />
                <text-input name="사업명(공식)" outlined :rules="{ required: true, min: 4, max: 100 }" class="col" />
                <div class="col" />
                <div class="col" />
            </div>
            <div class="row q-gutter-md j-mt-0">
                <date-input name="계약한날" outlined :rules="{ required: true, date: true }" class="col" />
                <date-input name="착수한날" outlined :rules="{ required: true, date: true }" class="col" />
                <date-input name="완료한날" outlined :rules="{ required: true, date: true }" class="col" />
                <div class="col" />
            </div>
            <div class="row q-gutter-md j-mt-0">
                <date-input name="사업시작일" outlined :rules="{ required: true, date: true }" class="col" />
                <date-input name="사업종료일" outlined :rules="{ required: true, date: true }" class="col" />
                <date-input name="정산마감일" outlined :rules="{ required: true, date: true }" class="col" />
                <date-input name="정산일" outlined :rules="{ required: true, date: true }" class="col" />
            </div>
            <div class="row q-gutter-md j-mt-0">
                <number-input name="총사업비(계약)" outlined :rules="{ required: true, max: 15 }" class="col" />
                <number-input name="간접비(계약)" outlined :rules="{ required: true, max: 15 }" class="col" />
                <number-input name="총사업비(결산)" outlined :rules="{ required: true, max: 15 }" class="col" />
                <number-input name="간접비(결산)" outlined :rules="{ required: true, max: 15 }" class="col" />
            </div>
            <div class="row j-mt-8">
                <div class="col">
                    <radio-input
                        name="사업종류"
                        :items="[
                            { label: '산학협력사업', value: '산학협력사업' },
                            { label: '지원금사업', value: '지원금사업' },
                        ]"
                    />
                </div>
                <div class="col">
                    <radio-input
                        name="부가가치세"
                        :items="[
                            { label: '부가가치세 납부', value: '납부' },
                            { label: '부가가치세 면제', value: '면제' },
                        ]"
                    />
                </div>
                <div class="col">
                    <radio-input
                        name="국가사업"
                        :items="[
                            { label: '국가연구개발사업', value: '국가' },
                            { label: '비국가사업', value: '비국가' },
                        ]"
                    />
                </div>
                <div class="col">
                    <radio-input
                        name="e나라도움"
                        :items="[
                            { label: 'e나라도움사업', value: 'e나라' },
                            { label: 'e나라도움 아님', value: '비e나라' },
                        ]"
                    />
                </div>
                <div class="col">
                    <radio-input
                        name="자체사업"
                        :items="[
                            { label: '자체사업', value: '자체' },
                            { label: '자체사업 아님', value: '비자체' },
                        ]"
                    />
                </div>
            </div>
            <div class="row j-mt-8">
                <switch-input name="기타사항" :items="[{ label: '아무개사업' }, { label: '다음사업' }]" />
            </div>
            <!--<pre>{{ values }}</pre>-->
            <div>
                <q-btn outline color="primary" label="저장" @click="handleSubmit(submit)" />
            </div>
        </vee-form>
    </div>
</template>
