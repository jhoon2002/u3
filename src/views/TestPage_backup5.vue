<script setup>
import { reactive, ref } from 'vue'
import http from '@/api/http'

const options = reactive([])
const value = ref(null)
const selectRef = ref(null)

const someFn = e => {
    console.log('e', '(' + e + ')')
}
const getData = async e => {
    const val = e
    try {
        const {
            data: { users },
        } = await http.get('/api/users/userid-name/' + val)
        options.value = users.map(item => ({
            value: item.userid,
            label: `${item.name}(${item.birthday})`,
        }))
    } catch (e) {
        console.log(e)
    }
}

const filterFn = (val, update, abort) => {
    update(
        async () => {
            try {
                const {
                    data: { users },
                } = await http.get('/api/users/userid-name/' + val)
                options.value = users.map(item => ({
                    value: item.userid,
                    label: `${item.name}(${item.birthday})`,
                }))
            } catch (e) {
                console.log(e)
            }
        },

        // "ref" is the Vue reference to the QSelect
        ref => {
            if (val !== '' && ref.options.length > 0) {
                ref.setOptionIndex(-1) // reset optionIndex in case there is something selected
                ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
            }
        },
    )
}

const inputFn = async val => {
    try {
        const {
            data: { users },
        } = await http.get('/api/users/userid-name/' + val)
        options.value = users.map(item => ({
            value: item.userid,
            label: `${item.name}(${item.birthday})`,
        }))
        selectRef.value.showPopup()
        if (val !== '' && options.length > 0) {
            selectRef.value.setOptionIndex(-1) // reset optionIndex in case there is something selected
            selectRef.value.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
        }
    } catch (e) {
        console.log(e)
    }
}
</script>
<template>
    <div class="row">
        <div class="col">
            <q-select
                ref="selectRef"
                label="연구책임자"
                v-model="value"
                :options="options.value"
                hide-dropdown-icon
                use-input
                clearable
                :input-debounce="0"
                @input-value="inputFn"
            />
        </div>
        <div class="col">value: {{ value }} options: {{ options.value }}</div>
        <div class="col" />
    </div>
</template>
