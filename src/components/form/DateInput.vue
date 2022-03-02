<template>
    <div>
        <vee-field :name="$props.name" :rules="$props.rules" v-slot="{ field, errorMessage, errors }">
            <q-input
                v-model="date"
                v-bind="field"
                :label="$props.name"
                mask="date"
                :error="errors.length > 0"
                :error-message="errorMessage"
                :outlined="$props.outlined"
            >
                <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                            <q-date v-model="date">
                                <div class="row items-center justify-end">
                                    <q-btn v-close-popup label="Close" color="primary" flat />
                                </div>
                            </q-date>
                        </q-popup-proxy>
                    </q-icon>
                </template>
                <template v-slot:label> {{ $props.name }} <required-sign v-if="rules.required" /> </template>
            </q-input>
        </vee-field>
    </div>
</template>

<script>
import RequiredSign from '@/components/form/RequiredSign.vue'
import { ref } from 'vue'
import { Field as VeeField } from 'vee-validate'

export default {
    name: 'DateInput',
    components: {
        VeeField,
        RequiredSign,
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
        return {
            date: ref(''),
        }
    },
}
</script>
