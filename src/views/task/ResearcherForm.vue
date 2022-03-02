<template>
    <v-sheet>
        <div class="text-h3 mb-5">연구원 등록</div>
        <v-row>
            <v-col cols="9">
                <v-card
                    flat
                    style="border-radius: 0; border-right: 1px solid #d3d3d3"
                    class="pa-0"
                >
                    <v-card-title> 연구원 목록 </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-center">연번</th>
                                        <th class="text-center">이름</th>
                                        <th class="text-center">직책</th>
                                        <th class="text-center">시작일</th>
                                        <th class="text-center">종료일</th>
                                        <th class="text-center">계약</th>
                                        <th class="text-center">계약서</th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in items" :key="item.name">
                                        <td class="text-center">
                                            {{ item.rank }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.name }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.role }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.begin }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.end }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.contract }}
                                        </td>
                                        <td class="text-center">
                                            {{ item.document }}
                                        </td>
                                        <td class="text-center">
                                            <v-btn icon small>
                                                <v-icon small>
                                                    mdi-pencil-outline
                                                </v-icon>
                                            </v-btn>
                                            <v-btn icon small>
                                                <v-icon small>
                                                    mdi-arrow-up
                                                </v-icon>
                                            </v-btn>
                                            <v-btn icon small>
                                                <v-icon small>
                                                    mdi-arrow-down
                                                </v-icon>
                                            </v-btn>
                                            <v-btn icon small>
                                                <v-icon small>
                                                    mdi-trash-can-outline
                                                </v-icon>
                                            </v-btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="primary" outlined> 저장 </v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card flat class="pa-0">
                    <div class="text-h6 mt-4">연구원 생성/수정</div>
                    <v-row>
                        <v-col>
                            <text-input
                                name="직책"
                                :rules="{ required: true, min: 2, max: 100 }"
                                v-model="name"
                            />
                        </v-col>
                        <v-col>
                            <text-input
                                name="이름"
                                :rules="{ required: true, min: 2, max: 100 }"
                                v-model="name"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <date-input
                                name="시작일"
                                :rules="{ required: true, date: true }"
                                v-model="begin"
                            />
                        </v-col>
                        <v-col>
                            <date-input
                                name="종료일"
                                :rules="{ date: true }"
                                v-model="end"
                            />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <radio-input
                                column
                                v-model="contract"
                                :items="[
                                    { name: '근로계약', value: '근로계약' },
                                    { name: '비근로계약', value: '비근로계약' },
                                ]"
                                defaultValue="비근로계약"
                            />
                        </v-col>
                        <v-col>
                            <radio-input
                                column
                                v-model="document"
                                :items="[
                                    { name: '계약서 작성', value: '작성' },
                                    { name: '계약서 미작성', value: '미작성' },
                                ]"
                                defaultValue="작성"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
import TextInput from '@/components/form/TextInput'
import RadioInput from '@/components/form/RadioInput'

export default {
    components: { RadioInput, TextInput },
    data() {
        return {
            name: '',
            role: '',
            rank: '',
            begin: '',
            end: '',
            contract: '',
            document: '',
            items: [
                {
                    name: '홍길동',
                    role: '연구책임자',
                    rank: 1,
                    begin: '2022-01-26',
                    end: '',
                    contract: '비근로계약',
                    document: '미작성',
                },
                {
                    name: '임꺽정',
                    role: '선임연구원',
                    rank: 2,
                    begin: '2022-02-10',
                    end: '',
                    contract: '비근로계약',
                    document: '작성',
                },
                {
                    name: '손오공',
                    role: '일반연구원',
                    rank: 3,
                    begin: '2022-01-26',
                    end: '2022-02-23',
                    contract: '비근로계약',
                    document: '작성',
                },
                {
                    name: '사오정',
                    role: '행정원',
                    rank: 4,
                    begin: '2022-03-01',
                    end: '',
                    contract: '근로계약',
                    document: '작성',
                },
            ],
        }
    },
}
</script>

<style scoped></style>
