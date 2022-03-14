<template>
    <div class="q-pa-md">
        <div class="q-gutter-md">
            <input :value="inputValue" @input="inputValue = $event.target.value" />
            inputValue: {{ inputValue }}

            <q-input :model-value="inputValue" @change="inputValue = $event" />

            <div>model: {{ model }}</div>
            <q-select
                filled
                v-model="model"
                use-input
                hide-selected
                fill-input
                input-debounce="0"
                label="Lazy filter"
                :options="options"
                @new-value="getData"
                style="width: 250px"
                hint="With hide-selected and fill-input"
            >
                <!--
                @filter="filterFn"
                @filter-abort="abortFilterFn"
            -->
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section class="text-grey"> No results </q-item-section>
                    </q-item>
                </template>
            </q-select>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import http from '@/api/http'

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

export default {
    setup() {
        const inputValue = ref(null)
        const options = ref(null)

        const getData = async val => {
            try {
                const {
                    data: { users },
                } = await http.get('/api/users/userid-name/' + val)
                console.log(users)
                options.value = users.map(item => item.name + ' ' + item.birthday)
            } catch {
                //
            }
        }

        return {
            getData,
            inputValue,
            model: ref(null),
            options,

            filterFn(val, update, abort) {
                // call abort() at any time if you can't retrieve data somehow

                update(async () => {
                    try {
                        const {
                            data: { users },
                        } = await http.get('/api/users/userid-name/' + val)
                        options.value = users.map(item => item.name + ' ' + item.birthday)
                    } catch {
                        //
                    }
                })
            },

            abortFilterFn() {
                // console.log('delayed filter aborted')
            },
        }
    },
}
</script>
