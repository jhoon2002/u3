<template>
    <div class="q-pa-md">
        <div class="q-gutter-md row">
            <q-select
                ref="compo1"
                outlined
                :model-value="model"
                use-input
                label="연구책임자"
                :options="options"
                style="width: 250px"
            />
            <q-input ref="compo2" :model-value="model" />
            model: {{ model }}
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import http from '@/api/http.js'

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

export default {
    setup() {
        const compo1 = ref(null)
        const compo2 = ref(null)
        const model = ref(null)
        const options = ref(stringOptions)

        onMounted(() => {
            // ref 로 native element 를 가져와서 input 이벤트가 발생할때 model 에 연결된 변수에 값을 저장한다.
            const el = compo1.value.getNativeElement()
            el.addEventListener('input', e => {
                model.value = e.target.value
            })
        })

        const filterFn = (val, update) => {
            if (val === '') {
                update(() => {
                    // options.value = stringOptions
                    options.value = null

                    // here you have access to "ref" which
                    // is the Vue reference of the QSelect
                })
                return
            }
            update(async () => {
                // const needle = val.toLowerCase()
                // options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
                try {
                    const {
                        data: { users },
                    } = await http.get('/api/users/userid-name/' + val)
                    options.value = users.map(item => item.name + ' ' + item.birthday)
                    console.log(options.value.length)
                    // this.model = '666666666666'
                    if (options.value.length === 1) {
                        model.value = options.value[0]
                        console.log(model)
                    }
                } catch {
                    //
                }
            })
        }

        return {
            model,
            options,
            filterFn,
            compo1,
            compo2,
        }
    },
}
</script>
