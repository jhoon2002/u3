<template>
    <div>
        <input name="email" v-model="email" />
        <span>{{ emailError }}</span>
        <input name="password" v-model="password" type="password" />
        <span>{{ passwordError }}</span>
    </div>
</template>
<script>
import { useForm, useField } from 'vee-validate'
export default {
    setup() {
        // Define a validation schema
        const simpleSchema = {
            email(value) {
                // validate email value and return messages...
            },
            name(value) {
                // validate name value and return messages...
            },
        }
        // Create a form context with the validation schema
        useForm({
            validationSchema: simpleSchema,
        })
        // No need to define rules for fields
        const { value: email, errorMessage: emailError } = useField('email')
        const { value: password, errorMessage: passwordError } = useField('password')
        return {
            email,
            emailError,
            password,
            passwordError,
        }
    },
}
</script>
