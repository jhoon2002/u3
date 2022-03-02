<script setup>
// import { ref, reactive, onMounted } from 'vue'
// import doTime from '@/components/TimeDo.vue'
// import TestSub from '@/components/TestSub.vue'
//
// const user = reactive({
//     name: '여종훈',
//     age: 50,
//     address: {
//         dong: '제기동',
//         goo: '동대문구',
//     },
//     hobbies: ['독서', '낚시', '등산'],
// })
//
// const sub = ref(null)
// const kkk = ref(null)
// onMounted(() => {
//     // sub.value.name = 'uuu'
//     kkk.value = sub.value.name
//     // console.log(sub.value.name)
// })
//
// const refarr = ref([1, 2, 3, { a: 'aaa', b: 'bbb' }])
// const reactarr = reactive([1, 2, 3, { a: 'aaa', b: 'bbb' }])
//
// // setTimeout(() => {
// //     user.name = '홍길동'
// //     // user.address = {
// //     //     dong: '안암동',
// //     //     goo: '성북구',
// //     // }
// //     user.address.dong = '장안동'
// //     user.hobbies = user.hobbies.filter(item => item === '낚시')
// // }, 2000)
//
// doTime(user)
</script>
<template>
    <!--    회원은? {{ user }} {{ kkk }}-->
    <!--    <div>refarr: {{ refarr }}</div>-->
    <!--    <div>reactarr: {{ reactarr }}</div>-->
    <!--    <q-btn label="이름 변경" @click="user.name = '홍길동'" />-->
    <!--    <q-btn label="ref 값 변경" @click="refarr[3].a = 'ref zzzzz'" />-->
    <!--    <q-btn label="reactive 값 변경" @click="reactarr[3].a = 'reactive zzzzz'" />-->
    <!--    <test-sub ref="sub" a="aaa" b="bbb">-->
    <!--        <div>내용을 보냅니다.</div>-->
    <!--    </test-sub>-->
    테스트 페이지
</template>
