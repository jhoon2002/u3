<template>
    <q-list>
        <template v-for="item in items">
            <q-expansion-item
                v-if="item.children"
                :key="item.path"
                :label="item.name"
                content-inset-level="0.2"
                class="text-body1"
            >
                <global-nav :items="item.children" />
            </q-expansion-item>
            <q-item v-else :key="item.path" :to="item.path">
                <q-item-section>
                    <q-item-label class="text-body1">{{ item.name }}</q-item-label>
                </q-item-section>
            </q-item>
        </template>
    </q-list>
</template>

<script>
export default {
    name: 'GlobalNav',
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>
