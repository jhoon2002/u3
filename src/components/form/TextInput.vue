<template>
    <div>
        <vee-field :name="$props.name" :rules="$props.rules" v-slot="{ field, errorMessage, errors }">
            <q-input
                v-model="state.enteredValue"
                v-bind="field"
                :label="$props.name"
                :error="errors.length > 0"
                :error-message="errorMessage"
                :outlined="$props.outlined"
            >
                <template v-slot:label> {{ name }} <required-sign v-if="rules.required" /> </template>
            </q-input>
        </vee-field>
    </div>
</template>
<script>
import RequiredSign from '@/components/form/RequiredSign.vue'
import { Field as VeeField } from 'vee-validate'
import { reactive } from 'vue'
export default {
    name: 'TextInput',
    components: {
        RequiredSign,
        VeeField,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        rules: {
            type: Object,
            required: true,
        },
        outlined: {
            type: Boolean,
        },
    },
    setup() {
        const state = reactive({
            enteredValue: '',
        })
        return {
            state,
        }
    },
}
</script>
