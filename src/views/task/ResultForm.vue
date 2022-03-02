<template>
    <v-sheet>
        <div class="text-h3 mb-15">산출물 등록</div>
        <v-sheet>
            <result-input :id="1" name="사업계획서" />
            <result-input :id="2" name="결과보고서" />
            <result-input :id="3" name="정산보고서" />
        </v-sheet>
    </v-sheet>
</template>

<script>
import TextInput from '@/components/form/TextInput'
import ResultInput from '@/components/form/ResultInput'
export default {
    components: { ResultInput, TextInput },
}
</script>

<style scoped></style>
