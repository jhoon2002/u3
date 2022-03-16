<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            model: {{ model }}
            <q-select
                ref="ya"
                label="연구책임자"
                outlined
                v-model="model"
                use-input
                :options="options"
                emit-value
                map-options
                style="width: 250px"
                @new-value="getData"
            >
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section class="text-grey"> 이름 입력후 Enter </q-item-section>
                    </q-item>
                </template>
            </q-select>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import http from '@/api/http'

export default {
    setup() {
        const options = ref([])
        const ya = ref(null)
        const model = ref(null)

        // const getData = () => {
        //     return null
        // }

        const getData = async (val, doneFn) => {
            try {
                const {
                    data: { users },
                } = await http.get('/api/users/userid-name/' + val)
                options.value = users.map(item => ({
                    value: item.userid,
                    label: `${item.name}(${item.birthday})`,
                }))
                if (options.value.length === 1) {
                    // model.value = options.value[0]
                    doneFn(options.value[0])
                } else {
                    ya.value.showPopup()
                }
            } catch (e) {
                console.log(e)
            }
            return
        }

        return {
            ya,
            getData,
            model,
            options,
        }
    },
}
</script>
