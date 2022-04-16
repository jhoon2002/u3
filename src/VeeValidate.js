import { configure, defineRule } from 'vee-validate'
import { required, email, min, max, length } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ko from '@vee-validate/i18n/dist/locale/ko.json'
import { isValidDate } from '@/api/util.js'
import { juminValidate } from '@/api/util.js'

configure({
    generateMessage: localize('ko', {
        messages: {
            ...ko.messages,
            required: '필수 입력입니다.',
            email: '이메일 형식에 맞지 않습니다.',
            min: '0:{min}자 이상이어야 합니다.',
            max: '0:{max}자 이하이어야 합니다.',
            length: '0:{max}자이어야 합니다.',
        },
    }),
})

setLocale('ko')

// Object.keys(AllRules).forEach(rule => {
//     defineRule(rule, AllRules[rule])
// })
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('length', length)
defineRule('date', value => {
    if (!value || !value.length) {
        return true
    }
    if (!isValidDate(value, '-')) {
        return '날짜 형식이 틀립니다.'
    }
    //return true: pass
    //return 'error message string': fail
    return true
})
defineRule('jumin', value => {
    let pattern = /^[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[1-4][0-9]{6}$/
    if (!pattern.test(value)) {
        return '― 없이 숫자만 13자리 입력'
    }
    return true
})
defineRule('juminSingle', value => {
    if (!juminValidate(value)) {
        return '주민등록번호 형식에 맞지 않습니다.'
    }
    return true
})
defineRule('cellphone', value => {
    let pattern = /^01[01679][0-9]{7,8}$/
    if (!pattern.test(value)) {
        return "'―' 없이 숫자만 10~11자리"
    }
    return true
})
defineRule('id', value => {
    let pattern = /^[a-z0-9][a-z0-9_-]{2,19}$/
    if (!pattern.test(value)) {
        return "영문 소문자, 숫자, '_', '-' (총 3~20자)"
    }
    return true
})
