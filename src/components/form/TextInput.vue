<script>
import RequiredSign from '@/components/form/RequiredSign.vue'
import { Field as VeeField } from 'vee-validate'
export default {
    name: 'TextInput',
    components: {
        VeeField,
        RequiredSign,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        outlined: {
            type: Boolean,
        },
        standout: {
            type: Boolean,
        },
        dense: {
            type: Boolean,
        },
        rules: {
            type: Object,
            required: true,
        },
    },
}
</script>
<template>
    <div style="min-height: 76px">
        <vee-field :name="$props.name" :rules="$props.rules" v-slot="{ field, handleChange, errorMessage, errors }">
            <q-input
                :standout="$props.standout"
                :outlined="$props.outlined"
                :dense="$props.dense"
                :label="$props.name"
                hide-bottom-space
                :error="errors.length > 0"
                :error-message="errorMessage"
                no-error-icon
                :model-value="field.value"
                @update:model-value="handleChange"
            >
                <template v-slot:label> {{ name }} <required-sign v-if="rules.required" /> </template>
                <template v-slot:error><div>dfjlsafld</div></template>
            </q-input>
        </vee-field>
    </div>
</template>
