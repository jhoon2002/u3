<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import { h } from 'vue'
import { QIcon } from 'quasar'

export default {
    name: 'TestPage',
    components: {
        vSelect,
    },
    data: () => ({
        Deselect: {
            render: () => {
                return h(QIcon, { name: 'close' })
            },
        },
        OpenIndicator: {
            render: () => '▼',
        },
        options: ['서울', '뉴욕', '부산'],
    }),
}
</script>
<template>
    <div>
        <v-select :components="{ Deselect }" :options="options" />
    </div>
</template>
