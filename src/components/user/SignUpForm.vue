<script setup>
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
</script>
<template>
    <vee-form
        v-slot="{ handleSubmit, errors, values }"
        :initial-values="{
            agreeTerm: false,
            agreeInfo: false,
            agreeJumin: false,
        }"
    >
        {{ values }}
        <q-card-section class="q-pl-lg">
            <div class="row q-mt-md">
                <div class="text-h6 j-pt-1">전체 동의</div>
                <q-space />
                <q-toggle v-model="agreeAll">
                    <template v-slot:default>
                        <span :class="agreeAll ? 'text-grey-9' : 'text-grey-5'"> 동의합니다 </span>
                    </template>
                </q-toggle>
            </div>
            <div class="row q-mt-sm">
                <div class="text-h6 j-pt-1">
                    약관 동의
                    <q-badge align="top" color="orange" class="q-pb-xs"> 필수 </q-badge>
                </div>
                <q-space />

                <vee-field name="agreeTerm" :rules="{ required: true }" v-slot="{ field, handleChange, errors }">
                    <q-toggle
                        :model-value="field.value"
                        :color="errors.length > 0 ? 'negative' : null"
                        :keep-color="errors.length > 0"
                        @update:model-value="handleChange($event)"
                    >
                        <template v-slot:default>
                            <span :class="field.value ? 'text-grey-9' : 'text-grey-5'"> 동의합니다 </span>
                        </template>
                    </q-toggle>
                </vee-field>
            </div>
            <div class="row">
                <q-scroll-area style="height: 150px; width: 550px; border: 1px solid #bbbbbb; border-radius: 5px">
                    <div class="q-pa-md text-body2 text-grey-6">
                        <p>
                            본 약관은 한국예술종합학교 산협력단(이하 '제공자'라 한다.)의 내부 전산시스템(이하 '본
                            시스템'이라 한다.) 운영과 관련 하여 제공자와 사용자의 권리와 의무를 정하는 것을 목적으로
                            한다.
                        </p>
                        <p>
                            제1조(제공자 의무) 제공자는 본 시스템을 적절하게 제작, 관리, 운영하여야 하며 사용자의 정보가
                            노출되지 않도록 보장하여야 한다.
                        </p>
                        <p>제2조(사용자 의무) 사용자는 본 시스템을 이용함에 있어 다음 각호의 의무를 진다.</p>
                        <div class="ml-2">
                            <p>1. 사용자는 부정한 방법으로 타인의 정보를 이용하여 사용자 등록을 할 수 없다.</p>
                            <p>2. 사용자는 부정한 방법으로 타인의 권한을 획득하여 본 시스템을 이용할 수 없다.</p>
                            <p>
                                3. 사용자는 본 시스템을 이용하여 얻은 타인의 정보를 업무 목적의 범위를 넘어 보관, 유통,
                                전달, 누설하는 등 부정하게 취급하지 않아야 한다.
                            </p>
                            <p>4. 사용자는 기타 부정한 방법으로 본 시스템을 이용할 수 없다.</p>
                        </div>
                        <p>
                            제3조(제공자 권리) 제공자는 사용자가 본 약관의 규정을 위반한 경우, 본 시스템 사용을 제한
                            또는 금지 시킬 수 있다.
                        </p>
                        <p>
                            제4조(사용자 권리) 사용자는 자신의 개인정보가 보호받을 권리를 가지며, 제공자가 본 약관의
                            의무를 위반하여 자신의 개인정보를 유출한 경우 이에 대한 시정과 배상을 요구할 수 있다.
                        </p>
                        <p>제5조(민·형사책임) 본 약관의 규정은 당사자의 민사 또는 형사책임에 영향을 미치지 않는다.</p>
                        <p>
                            제6조(일반규정) 제공자는 산단의 정관, 규정 등 내부 절차에 따라 본 시스템의 이용과 관련 규정
                            또는 지침 등을 제정할 수 있으며, 이때 사용자는 해당 규정 또는 지침에 동의한 것으로 본다.
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
                <vee-field name="agreeInfo" :rules="{ required: true }" v-slot="{ field, handleChange, errors }">
                    <q-toggle
                        :model-value="field.value"
                        :color="errors.length > 0 ? 'negative' : null"
                        :keep-color="errors.length > 0"
                        @update:model-value="handleChange($event)"
                    >
                        <template v-slot:default>
                            <span :class="field.value ? 'text-grey-9' : 'text-grey-5'"> 동의합니다 </span>
                        </template>
                    </q-toggle>
                </vee-field>
            </div>
            <div class="row q-mt-sm">
                <div class="text-h6 j-pt-1">
                    주민등록번호 수집 동의
                    <q-badge align="top" color="orange" class="q-pb-xs"> 필수 </q-badge>
                </div>
                <q-space />
                <vee-field name="agreeJumin" :rules="{ required: true }" v-slot="{ field, handleChange, errors }">
                    <q-toggle
                        :model-value="field.value"
                        :color="errors.length > 0 ? 'negative' : null"
                        :keep-color="errors.length > 0"
                        @update:model-value="handleChange($event)"
                    >
                        <template v-slot:default>
                            <span :class="field.value ? 'text-grey-9' : 'text-grey-5'"> 동의합니다 </span>
                        </template>
                    </q-toggle>
                </vee-field>
            </div>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
            <q-btn outline label="창닫기" color="negative" @click="$emit('close')" />
            <q-btn outline label="다음 단계" @click="handleSubmit(() => (!errors.length ? $emit('next') : null))" />
        </q-card-actions>
    </vee-form>
</template>
