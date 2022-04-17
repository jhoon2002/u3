<script setup>
import { useField } from 'vee-validate'
const isRequired = value => {
    if (value && value.trim()) {
        return true
    }
    return 'This is required'
}
const { value: name, errorMessage: emName } = useField('이름2', { required: true })
const { value: name2, errorMessage: emName2 } = useField('dsafljdsalfj', { required: true })
</script>
<template>
    <div>
        <form>
            <q-input name="이름" label="이름" v-model="name" :error="!!emName" />
            <q-input name="이름2" label="이름2" v-model="name2" :error="!!emName2" :error-message="emName2" />
        </form>
    </div>
</template>
