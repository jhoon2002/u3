<script setup>
import { onMounted, ref } from 'vue'
import http from '@/api/http.js'
import JsonViewer from 'vue-json-viewer'

const open = ref(false)
const keyword = ref(null)
const keywordRef = ref(null)
const menuRef = ref(null)
const ya = ref(null)
const options = ref([])
let timeout = null

const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'].reduce((acc, opt) => {
    for (let i = 1; i <= 5; i++) {
        acc.push(opt + ' ' + i)
    }
    return acc
}, [])

onMounted(() => {
    // ref 로 native element 를 가져와서 input 이벤트가 발생할때 model 에 연결된 변수에 값을 저장한다.
    const el = keywordRef.value.getNativeElement()
    el.addEventListener('input', async e => {
        //model
        keyword.value = e.target.value

        //getData
        clearTimeout(timeout)
        timeout = setTimeout(async () => {
            try {
                const {
                    data: { users },
                } = await http.get('/api/users/userid-name/' + e.target.value)
                options.value = users.map((item, index) => ({
                    index: index,
                    label: item.name + ' ' + item.birthday,
                    value: item.userid,
                    focus: index === 0,
                }))
                open.value = true
            } catch (e) {
                options.value = []
                open.value = false
                console.log(e)
            }
        }, 200)
    })
})

const some = val => {
    console.log('val', val)
}

const menuUp = () => {
    const nowIndex = options.value.filter(item => item.focus).map(item => item.index)[0]
    console.log('menuUp', nowIndex)
    if (0 < nowIndex) {
        options.value[nowIndex].focus = false
        options.value[nowIndex - 1].focus = true
    }
}
const menuDown = () => {
    const nowIndex = options.value.filter(item => item.focus).map(item => item.index)[0]
    console.log('menuDown', nowIndex)
    if (nowIndex < options.value.length - 1) {
        options.value[nowIndex].focus = false
        options.value[nowIndex + 1].focus = true
    }
}

const focusToMenu = () => {
    menuRef.value.focus()
    menuDown()
}

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

const filterFn = (val, update, abort) => {
    update(async () => {
        // const needle = val.toLocaleLowerCase()
        // options.value = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
        if (!val) options.value = []
        console.log('val', val)
        try {
            const {
                data: { users },
            } = await http.get('/api/users/userid-name/' + val)
            options.value = users.map(item => ({
                value: item.userid,
                label: `${item.name}(${item.birthday})`,
            }))
            // if (options.value.length === 1) {
            //     // model.value = options.value[0]
            //     doneFn(options.value[0])
            // } else {
            console.log('users', users)
            // ya.value.showPopup()
            // }
        } catch (e) {
            console.log('error', e)
            options.value = []
        }
    })
}

const setModel = val => {
    keyword.value = val
}
</script>
<template>
    <div class="row">
        <div class="col">
            <div>keyword: {{ keyword }} / open: {{ open }}</div>
            <div>
                <q-input ref="keywordRef" :model-value="keyword" label="연구책임자" @keydown.down="focusToMenu" />
                <q-menu
                    ref="menuRef"
                    :model-value="open"
                    no-parent-event
                    auto-close
                    separate-close-popup
                    no-focus
                    :scroll-target="$refs.menus"
                    max-height="200px"
                    @hide="open = false"
                    @keydown.down="menuDown"
                    @keydown.up="menuUp"
                >
                    <q-list style="min-width: 150px" ref="menus">
                        <q-item clickable v-for="option in options" :key="option.label" :focused="option.focus">
                            <q-item-section>{{ option.label }}</q-item-section>
                        </q-item>
                        <q-separator />
                    </q-list>
                </q-menu>
            </div>
            <div>
                <q-select
                    :model-value="keyword"
                    use-input
                    hide-selected
                    fill-input
                    input-debounce="0"
                    :options="options"
                    @filter="filterFn"
                    @input-value="setModel"
                    hint="Text autocomplete"
                >
                    <template v-slot:no-option>
                        <q-item>
                            <q-item-section class="text-grey"> No results </q-item-section>
                        </q-item>
                    </template>
                </q-select>
            </div>
        </div>
        <div class="col">
            <div>options: <json-viewer :value="options" :expand-depth="5" /></div>
            <div>
                <q-select
                    label="연구책임자"
                    :model-value="keyword"
                    use-input
                    :option-value="options"
                    @input-value="some"
                >
                </q-select>
            </div>
        </div>
    </div>
</template>
