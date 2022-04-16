<template>
    <q-btn label="바꿔" @click="changeValue" />
    {{ values }}
    <vee-form v-slot="{ handleSubmit, values }">
        <vee-field name="aaa" v-model="ilove"> </vee-field>
        <input v-model="twitter" type="url" />
        <input v-model="github" type="url" />
        <q-btn label="확인" @click="handleSubmit(onSubmit)" />
        {{ values }}
    </vee-form>
</template>
<script>
import { useField, useForm, Form as VeeForm, Field as VeeField } from 'vee-validate'
export default {
    components: {
        VeeForm,
        VeeField,
    },
    setup() {
        const { handleSubmit, values } = useForm()
        const onSubmit = handleSubmit(values => {
            alert(JSON.stringify(values, null, 2))
        })
        const { value: ilove, handleChange: handleChange0 } = useField('aaa')
        const { value: twitter, handleChange: handleChangeA } = useField('faefsfds')
        const { value: github, handleChange: handleChangeB } = useField('efwefsfee')
        return {
            ilove,
            twitter,
            github,
            onSubmit,
            changeValue: () => {
                handleChange0('http://iloveschool.com', true)
                handleChangeA('http://naver.com', true)
                handleChangeB('http://daum.net', true)
            },
            values,
        }
    },
}
</script>
