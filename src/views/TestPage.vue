<script setup>
import { ref } from 'vue'
import UserSelect from '@/components/form/UserSelect.vue'

const isFocusIn = ref(false)
</script>
<template>
    <div>
        <q-input outlined label="" style="width: 200px" />
        <br />
        <br />
        <div class="box" :class="{ highlighted: isFocusIn }">
            <input
                type="text"
                style="outline: 0; border: 0; margin-top: 12px"
                @focusin="isFocusIn = true"
                @focusout="isFocusIn = false"
            />
        </div>
        <br />
        <br />
        <user-select rules="{required: true, min:20}" name="연구책임자" />
    </div>
</template>
<style lang="scss" scoped>
.box {
    height: 50px;
    width: 200px;
    border-radius: 5px;
    position: relative;
    outline: none;
    /*border: 1px solid greenyellow;*/
}
.box:before {
    border-radius: inherit;
    border: 1px solid rgba(0, 0, 0, 0.24);
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
/* 불필요한듯 */
.box.highlighted:hover:before {
    border-color: transparent;
}
.box:hover:before {
    border-color: #000;
}

/*.box:hover {*/
/*    border-color: #000;*/
/*}*/
.box:before,
.box:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
}
.box:after {
    height: inherit;
    border-radius: inherit;
    border: 2px solid transparent;
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
}
.box.highlighted:after {
    border-width: 1px;
    border-color: $primary;
    /*transform: scale3d(1, 1, 1);*/
}
</style>
