<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
    name: 'TestPage',
    components: {
        vSelect,
    },
    data: () => ({
        Deselect: {
            render: function (createElement) {
                return createElement('span', '❌')
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
        <v-select :components="{ Deselect, OpenIndicator }" :options="options" />
    </div>
</template>
