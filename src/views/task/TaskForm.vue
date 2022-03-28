<script>
import { Form as VeeForm } from 'vee-validate'
import TextInput from '@/components/form/TextInput.vue'
import DateInput from '@/components/form/DateInput.vue'
import RadioInput from '@/components/form/RadioInput.vue'
import NumberInput from '@/components/form/NumberInput.vue'
import UserSelect from '@/components/form/UserSelect.vue'

import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { ref } from 'vue'
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)

export default {
    name: 'TaskBasicForm',
    components: {
        RadioInput,
        TextInput,
        VeeForm,
        DateInput,
        NumberInput,
        FilePond,
        UserSelect,
    },
    setup() {
        const submit = values => {
            //form validation pass 시..
            //실패 시는 <vee-form @invalid-submit="" 사용
            return console.log(values)
        }
        const handleFilePondInit = function () {
            console.log('FilePond has initialized')

            // FilePond instance methods are available on `this.$refs.pond`
        }
        const abc = ref('')
        return {
            submit,
            myFiles: ref([]),
            handleFilePondInit,
            abc,
        }
    },
}
</script>
<template>
    <div>
        <vee-form
            v-slot="{ handleSubmit, resetForm, values }"
            :initial-values="{
                사업종류: '산학협력사업',
                부가가치세: '납부',
                국가사업: '비국가',
                e나라도움: '비e나라',
                자체사업: '비자체',
            }"
        >
            <div class="row q-gutter-lg">
                <div class="col">
                    <q-card flat class="q-pa-lg col">
                        <!--
                        <div class="text-h3 j-mb-15">
                            사업 등록
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
                        -->
                        <!-- POST 수정시 :initial-values="{ '사업명(사용)': '아무거나' }" -->
                        <div class="text-h6">사업 개요</div>
                        <div class="row q-gutter-md q-mt-lg">
                            <text-input
                                name="사업명(사용)"
                                outlined
                                :rules="{ required: true, min: 4, max: 100 }"
                                class="col"
                            />
                            <text-input
                                name="사업명(공식)"
                                outlined
                                :rules="{ required: true, min: 4, max: 100 }"
                                class="col"
                            />
                        </div>
                        <div class="row q-gutter-md q-mt-xs">
                            <user-select name="연구책임자" :rules="{ required: true, min: 1, max: 100 }" class="col" />
                            <text-input
                                name="지원기관"
                                outlined
                                :rules="{ required: true, min: 4, max: 100 }"
                                class="col"
                            />
                        </div>
                    </q-card>
                    <q-card flat class="q-pa-lg q-mt-lg col">
                        <div class="text-h6">사업 성격</div>
                        <div class="row q-mt-lg">
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
                        </div>
                        <div class="row q-mt-lg">
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
                            <div class="col" />
                        </div>
                    </q-card>
                    <q-card flat class="q-pa-lg q-mt-lg col">
                        <div class="text-h6 q-mb-lg">사업비</div>
                        <div class="row q-gutter-md j-mt-0">
                            <number-input
                                name="총사업비(계약)"
                                outlined
                                :rules="{ required: true, max: 15 }"
                                class="col"
                            />
                            <number-input
                                name="간접비(계약)"
                                outlined
                                :rules="{ required: true, max: 15 }"
                                class="col"
                            />
                        </div>
                        <div class="row q-gutter-md j-mt-0">
                            <number-input
                                name="총사업비(결산)"
                                outlined
                                :rules="{ required: true, max: 15 }"
                                class="col"
                            />
                            <number-input
                                name="간접비(결산)"
                                outlined
                                :rules="{ required: true, max: 15 }"
                                class="col"
                            />
                        </div>
                    </q-card>
                </div>
                <div class="col">
                    <q-card flat class="q-pa-lg col">
                        <div class="text-h6 q-mb-lg">사업 기간</div>
                        <date-input name="계약한날" outlined :rules="{ required: true, date: true }" class="col" />
                        <div class="row q-gutter-md j-mt-0">
                            <date-input name="착수한날" outlined :rules="{ required: true, date: true }" class="col" />
                            <date-input name="완료한날" outlined :rules="{ required: true, date: true }" class="col" />
                        </div>
                        <div class="row q-gutter-md j-mt-0">
                            <date-input
                                name="사업시작일"
                                outlined
                                :rules="{ required: true, date: true }"
                                class="col"
                            />
                            <date-input
                                name="사업종료일"
                                outlined
                                :rules="{ required: true, date: true }"
                                class="col"
                            />
                        </div>
                        <div class="row q-gutter-md j-mt-0">
                            <date-input
                                name="정산마감일"
                                outlined
                                :rules="{ required: true, date: true }"
                                class="col"
                            />
                            <date-input name="정산일" outlined :rules="{ required: true, date: true }" class="col" />
                        </div>
                    </q-card>

                    <!--<pre>{{ values }}</pre>-->
                    <q-card flat class="q-pa-lg col q-mt-lg">
                        <div class="text-h6">산출물</div>
                        <div class="row q-gutter-md q-mt-lg">
                            <div class="col">
                                <div class="text-body1 j-mb-2">
                                    사업공고
                                    <q-icon name="las la-question-circle" class="cursor-pointer j-mb-1">
                                        <q-tooltip
                                            anchor="top middle"
                                            self="bottom start"
                                            :offset="[0, 0]"
                                            transition-show="fade"
                                            transition-hide="scale"
                                        >
                                            사업공고, 제안요청서 등
                                        </q-tooltip>
                                    </q-icon>
                                </div>
                                <file-pond
                                    name="test"
                                    ref="pond"
                                    label-idle="파일 올려놓기..."
                                    v-bind:allow-multiple="true"
                                    accepted-file-types="image/jpeg, image/png"
                                    server="/api"
                                    v-bind:files="myFiles"
                                    v-on:init="handleFilePondInit"
                                >
                                </file-pond>
                            </div>
                            <div class="col">
                                <div class="text-body1 j-mb-2">
                                    계약서
                                    <q-icon name="las la-question-circle" class="cursor-pointer j-mb-1">
                                        <q-tooltip
                                            anchor="top middle"
                                            self="bottom start"
                                            :offset="[0, 0]"
                                            transition-show="fade"
                                            transition-hide="scale"
                                        >
                                            산학연협력계약서, 협정서, 협약서, 제안서,<br />
                                            근로계약서, 연구원계약서, 용역계약서 등 <br />
                                            각종 계약서 일체
                                        </q-tooltip>
                                    </q-icon>
                                </div>
                                <file-pond
                                    name="test"
                                    ref="pond"
                                    label-idle="파일 올려놓기..."
                                    v-bind:allow-multiple="true"
                                    accepted-file-types="image/jpeg, image/png"
                                    server="/api"
                                    v-bind:files="myFiles"
                                    v-on:init="handleFilePondInit"
                                >
                                </file-pond>
                            </div>
                            <div class="col">
                                <div class="text-body1 j-mb-2">
                                    사업계획서
                                    <q-icon name="las la-question-circle" class="cursor-pointer j-mb-1">
                                        <q-tooltip
                                            anchor="top middle"
                                            self="bottom start"
                                            :offset="[0, 0]"
                                            transition-show="fade"
                                            transition-hide="scale"
                                        >
                                            사업계획서, 제안서, 예산서 등
                                        </q-tooltip>
                                    </q-icon>
                                </div>
                                <file-pond
                                    name="test"
                                    ref="pond"
                                    label-idle="파일 올려놓기..."
                                    v-bind:allow-multiple="true"
                                    accepted-file-types="image/jpeg, image/png"
                                    server="/api"
                                    v-bind:files="myFiles"
                                    v-on:init="handleFilePondInit"
                                >
                                </file-pond>
                            </div>
                            <div class="col">
                                <div class="text-body1 j-mb-2">
                                    결과보고서
                                    <q-icon name="las la-question-circle" class="cursor-pointer j-mb-1">
                                        <q-tooltip
                                            anchor="top middle"
                                            self="bottom start"
                                            :offset="[0, 0]"
                                            transition-show="fade"
                                            transition-hide="scale"
                                        >
                                            착수/중간/결과보고서, 정산서, 사업결과물 등
                                        </q-tooltip>
                                    </q-icon>
                                </div>
                                <file-pond
                                    name="test"
                                    ref="pond"
                                    label-idle="파일 올려놓기..."
                                    v-bind:allow-multiple="true"
                                    accepted-file-types="image/jpeg, image/png"
                                    server="/api"
                                    v-bind:files="myFiles"
                                    v-on:init="handleFilePondInit"
                                >
                                </file-pond>
                            </div>
                        </div>
                        <div class="j-mt-15">
                            <q-btn outline color="primary" label="저장" @click="handleSubmit(submit)" />
                        </div>
                    </q-card>
                </div>
            </div>
        </vee-form>
    </div>
</template>
