<script setup>
import { computed, ref } from 'vue'
const inputRef = ref(null)
const labelClass = ref('blured')
// const labelClass = computed(() => {
//
//     if inputRef.
//
// })
</script>
<template>
    <div class="row">
        <div class="col">
            <q-input outlined label="연구채임자" />
        </div>
        <div class="col">
            <div style="position: relative; height: 56px; border: 1px solid #c2c2c2; border-radius: 4px; padding: 10px">
                <div :class="labelClass">연구책임자</div>
                <div style="margin: 13px 0 0 0">
                    <input
                        ref="inputRef"
                        type="text"
                        style="border: 0; outline: 0 !important"
                        @focus="labelClass = 'focused'"
                        @blur="labelClass = 'blured'"
                    />
                </div>
            </div>
        </div>
        <div class="col" />
        <div class="col" />
    </div>
</template>
<style scoped>
.blured {
    position: absolute;
    top: 14px;
    font-size: 1rem;
    color: #a4a4a4;
    transition: all 0.3s;
}
.focused {
    position: absolute;
    top: 5px;
    font-size: 0.8rem;
    color: #a4a4a4;
    transition: all 0.3s;
}
</style>
