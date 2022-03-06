import { configure, defineRule } from 'vee-validate'
import { required, email, min, max } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ko from '@vee-validate/i18n/dist/locale/ko.json'
import { isValidDate } from '@/api/util.js'

configure({
    generateMessage: localize('ko', {
        messages: {
            ...ko.messages,
            required: '필수 입력입니다.',
            email: '이메일 형식에 맞지 않습니다.',
            min: '0:{min}자 이상이어야 합니다.',
            max: '0:{max}자 이하이어야 합니다.',
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
