<script>
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import { reactive } from 'vue'

export default {
    name: 'TaskBasic',
    components: {
        VeeForm,
        VeeField,
    },
    setup() {
        const state = reactive({
            nick: '',
        })

        return {
            state,
        }
    },
}
</script>
<template>
    <div>
        <div class="text-h3 q-mb-lg">기본 정보 등록</div>
        <vee-form v-slot="{}">
            <vee-field
                name="사업명(사용)"
                :rules="{ required: true, min: 4, max: 7 }"
                v-slot="{ field, errorMessage, errors }"
            >
                <q-input
                    v-model="state.nick"
                    v-bind="field"
                    label="사업명(사용)"
                    :error="errors.length > 0"
                    :error-message="errorMessage"
                />
                {{ field }}
            </vee-field>
        </vee-form>
    </div>
</template>
