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
        maxlength: {
            type: String,
        },
        stackLabel: {
            type: Boolean,
        },
        type: {
            type: String,
        },
        inputStyle: {
            type: String,
        },
        inputClass: {
            type: String,
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
                :stack-label="$props.stackLabel"
                hide-bottom-space
                :maxlength="$props.maxlength"
                :type="$props.type"
                :error="errors.length > 0"
                :error-message="errorMessage"
                no-error-icon
                :model-value="field.value"
                :input-style="$props.inputStyle"
                :input-class="$props.inputClass"
                @update:model-value="handleChange"
            >
                <template v-slot:label> {{ name }} <required-sign v-if="rules.required" /> </template>
                <template v-slot:error><div>dfjlsafld</div></template>
            </q-input>
        </vee-field>
    </div>
</template>
