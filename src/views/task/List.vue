<template>
    <v-sheet>
        <div class="text-h3 mb-5">사업 목록</div>

        <v-data-table :headers="headers" :items="items" />
    </v-sheet>
</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            items: [
                {
                    no: 1,
                    subject: '협력종합예술활동 4차',
                    pi: '최준호',
                    begin: '2021.03.01.',
                    kind: '산학협력사업',
                    vat: '대상',
                    amount1: '3,652,400,000',
                    overhead1: '365,000,000',
                },
            ],
            headers: [
                { text: 'No', value: 'no' },
                { text: '사업명', value: 'subject' },
                { text: '연구책임자', value: 'pi' },
                { text: '사업시작일', value: 'begin' },
                { text: '성격', value: 'kind' },
                { text: '부가세', value: 'vat' },
                { text: '총사업비', value: 'amount1' },
                { text: '간접비', value: 'overhead1' },
            ],
        }
    },
}
</script>

<style scoped></style>
