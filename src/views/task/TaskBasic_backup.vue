<template>
    <v-sheet>
        <div class="text-h3 mb-5">기본 정보 등록</div>
        <validation-observer ref="observer" v-slot="{ invalid, validated, handleSubmit }">
            <v-sheet class="px-4">
                <v-row class="d-block d-md-flex">
                    <v-col>
                        <text-input name="사업명(사용)" :rules="{ required: true, min: 4, max: 100 }" v-model="name" />
                    </v-col>
                    <v-col>
                        <text-input
                            name="사업명(공식)"
                            :rules="{ required: true, min: 4, max: 100 }"
                            v-model="fullname"
                        />
                    </v-col>
                    <v-col> </v-col>
                </v-row>
                <v-row class="d-block d-md-flex">
                    <v-col>
                        <date-input name="계약일(실제)" :rules="{ required: true, date: true }" v-model="date" />
                    </v-col>
                    <v-col>
                        <date-input name="착수일(실제)" :rules="{ required: true, date: true }" v-model="begin" />
                    </v-col>
                    <v-col>
                        <date-input name="완료일(실제)" :rules="{ date: true }" v-model="end" />
                    </v-col>
                    <v-col> </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <date-input name="사업시작일(명목)" :rules="{ required: true, date: true }" v-model="start" />
                    </v-col>
                    <v-col>
                        <date-input name="사업종료일(명목)" :rules="{ date: true }" v-model="finish" />
                    </v-col>
                    <v-col>
                        <date-input name="정산마감일" :rules="{ date: true }" v-model="calend" />
                    </v-col>
                    <v-col>
                        <date-input name="정산일" :rules="{ date: true }" v-model="calfinish" />
                    </v-col>
                </v-row>
                <v-row class="d-block d-md-flex">
                    <v-col>
                        <number-input
                            name="총사업비(계약)"
                            :rules="{ required: true }"
                            v-model="amount1"
                            hint-enable
                            hint-append="원"
                            suffix="원"
                        />
                    </v-col>
                    <v-col>
                        <number-input
                            name="간접비(계약)"
                            :rules="{ required: true }"
                            v-model="overhead1"
                            hint-enable
                            hint-append="원"
                            suffix="원"
                        />
                    </v-col>
                    <v-col>
                        <number-input
                            name="총사업비(결산)"
                            :rules="{}"
                            v-model="amount2"
                            hint-enable
                            hint-append="원"
                            suffix="원"
                        />
                    </v-col>
                    <v-col>
                        <number-input
                            name="간접비(결산)"
                            :rules="{}"
                            v-model="overhead2"
                            hint-enable
                            hint-append="원"
                            suffix="원"
                        />
                    </v-col>
                </v-row>
                <v-row class="d-block d-md-flex">
                    <v-col>
                        <radio-input
                            column
                            v-model="kind"
                            :items="[
                                { name: '산학협력사업', value: '산학협력사업' },
                                { name: '지원금사업', value: '지원금사업' },
                            ]"
                            defaultValue="산학협력사업"
                        />
                    </v-col>
                    <v-col>
                        <radio-input
                            column
                            v-model="vat"
                            :items="[
                                { name: '부가가치세 납부', value: '납부' },
                                { name: '부가가치세 면제', value: '면제' },
                            ]"
                            defaultValue="납부"
                        />
                    </v-col>
                    <v-col>
                        <radio-input
                            column
                            v-model="national"
                            :items="[
                                { name: '국가연구개발사업', value: '국가' },
                                { name: '비국가사업', value: '비국가' },
                            ]"
                            defaultValue="비국가"
                        />
                    </v-col>
                    <v-col>
                        <radio-input
                            column
                            v-model="enara"
                            :items="[
                                { name: 'e나라도움사업', value: 'e나라' },
                                { name: 'e나라도움 아님', value: '비e나라' },
                            ]"
                            defaultValue="비e나라"
                        />
                    </v-col>
                    <v-col>
                        <radio-input
                            column
                            v-model="self"
                            :items="[
                                { name: '자체사업', value: '자체' },
                                { name: '자체사업 아님', value: '비자체' },
                            ]"
                            defaultValue="비자체"
                        />
                    </v-col>
                    <v-col> </v-col>
                </v-row>
                <v-row justify="center" class="mt-8 mb-10">
                    <!--
                    <v-btn
                        color="warning lighten-1"
                        fab
                        x-small
                        elevation="0"
                        dark
                        @click="$refs.observer.reset()"
                    >
                        <v-icon
                            class="material-icons-round"
                        >
                            refresh
                        </v-icon>
                    </v-btn>
                    <v-btn
                        color="success lighten-1"
                        fab
                        x-small
                        elevation="0"
                        class="ml-1"
                        @click="$refs.observer.validate()"
                    >
                        <v-icon
                            class="material-icons-round"
                        >
                            done
                        </v-icon>
                    </v-btn>
                    -->

                    <v-btn color="secondary lighten-2" outlined @click="$refs.observer.validate()"> 유효성검사 </v-btn>
                    <v-btn color="secondary lighten-2" outlined class="ml-2" @click="$refs.observer.reset()">
                        검사리셋
                    </v-btn>
                    <v-btn color="primary" outlined class="ml-2" @click="handleSubmit(submit)"> 확인 </v-btn>
                </v-row>
            </v-sheet>
        </validation-observer>
    </v-sheet>
</template>

<script>
import DateInput from '@/components/form/DateInput.vue'
import TextInput from '@/components/form/TextInput'
import NumberInput from '@/components/form/NumberInput'
import RadioInput from '@/components/form/RadioInput.vue'

export default {
    components: {
        RadioInput,
        NumberInput,
        DateInput,
        TextInput,
    },
    data() {
        return {
            name: '',
            fullname: '',
            pi: '',
            date: '',
            begin: '',
            end: null,
            start: '',
            finish: '',
            calend: '',
            calfinish: '',
            kind: '',
            vat: '',
            national: '',
            enara: '',
            self: '',
            amount1: null,
            overhead1: null,
            amount2: null,
            overhead2: null,
            piDialog: false,
        }
    },
    methods: {
        submit() {
            this.$refs.observer.validate()
            console.log('----submit-----')
        },
    },
}
</script>
