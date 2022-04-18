<script>
import RequiredSign from '@/components/form/RequiredSign.vue'
import { useField } from 'vee-validate'
import { onMounted, ref } from 'vue'
export default {
    name: 'JInput',
    components: {
        RequiredSign,
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        outlined: {
            type: Boolean,
            default: false,
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
        errorMessage: {
            type: String,
        },
        requiredSign: {
            type: Boolean,
            default: false,
        },
        requiredIcon: {
            type: String,
            default: 'las la-asterisk',
        },
        disable: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { emit }) {
        const { value } = useField(props.label)
        const inputRef = ref(null)

        onMounted(() => {
            const el = inputRef.value.getNativeElement()
            el.addEventListener('input', e => {
                // handleChange(e, true)
                emit('update:model-value', e.target.value)
            })
        })

        return {
            inputRef,
            value,
        }
    },
}
</script>
<template>
    <div style="min-height: 76px">
        <q-input
            ref="inputRef"
            v-bind="$props"
            hide-bottom-space
            no-error-icon
            :error="!!$props.errorMessage"
            :model-value="value"
        >
            <template v-slot:label>
                {{ $props.label }}
                <required-sign :name="$props.requiredIcon" v-if="$props.requiredSign" />
            </template>
            <template v-slot:append><slot name="append" /></template>
        </q-input>
    </div>
</template>
