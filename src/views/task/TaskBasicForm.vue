<script>
import { Form as VeeForm } from 'vee-validate'
import { reactive } from 'vue'
import TextInput from '@/components/form/TextInput.vue'
import DateInput from '@/components/form/DateInput.vue'

export default {
    name: 'TaskBasicForm',
    components: {
        TextInput,
        VeeForm,
        DateInput,
    },
    setup() {
        const state = reactive({
            name: '',
            fullname: '',
            date: '',
            begin: '',
            end: '',
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
            <div class="row q-gutter-md">
                <text-input
                    name="사업명(사용)"
                    :rules="{ required: true, min: 4, max: 100 }"
                    v-model="state.name"
                    class="col"
                />
                <text-input
                    name="사업명(공식)"
                    :rules="{ required: true, min: 4, max: 100 }"
                    v-model="state.fullname"
                    class="col"
                />
                <div class="col" />
            </div>
            <div class="row q-gutter-md">
                <date-input name="계약한날" :rules="{ required: true }" v-model="state.date" class="col" />
                <date-input name="착수한날" :rules="{ required: true }" v-model="state.begin" class="col" />
                <date-input name="완료한날" :rules="{ required: true }" v-model="state.end" class="col" />
                <div class="col" />
            </div>
        </vee-form>
    </div>
</template>
