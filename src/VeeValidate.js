import { configure, defineRule } from 'vee-validate'
import { required, email, min, max, length, confirmed } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ko from '@vee-validate/i18n/dist/locale/ko.json'
import { isValidDate, juminValidate } from '@/api/util.js'
import http from '@/api/http.js'

configure({
    generateMessage: localize('ko', {
        messages: {
            ...ko.messages,
            required: '필수 입력입니다.',
            email: '이메일 형식에 맞지 않습니다.',
            min: '0:{min}자 이상이어야 합니다.',
            max: '0:{max}자 이하이어야 합니다.',
            length: '0:{max}자를 입력하시기 바랍니다.',
            confirmed: '입력한 비밀번호와 일치하지 않습니다.',
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
defineRule('confirmed', confirmed)
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
defineRule('password', value => {
    if (!value) {
        return true
    }
    let pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/
    if (!pattern.test(value)) {
        return '영문, 숫자 포함 6~20자'
    }
    return true
})
defineRule('loginidDuplicated', async value => {
    try {
        //같은 아이디 없으면 통과
        await http.get('/api/users/loginid/' + value)
        return true
    } catch (e) {
        // 같은 아이디 있으면 409(Conflict) 응답
        // "statusCode": 409,
        // "message": "존재하는 아이디입니다.",
        // "error": "Conflict"
        if (e.response.data.error === 'Conflict') {
            return '사용 중인 아이디입니다.'
        }
        return '시스템 오류(관리자에 문의)'
    }
})
defineRule('emailDuplicated', async value => {
    try {
        //같은 이메일 없으면 통과
        await http.get('/api/users/email/' + value)
        return true
    } catch (e) {
        // 같은 이메일 있으면 409(Conflict) 응답
        // "statusCode": 409,
        // "message": "존재하는 이메일입니다.",
        // "error": "Conflict"
        if (e.response.data.error === 'Conflict') {
            return '사용 중인 이메일입니다.'
        }
        return '시스템 오류(관리자에 문의)'
    }
})
defineRule('cellphoneDuplicated', async value => {
    try {
        //같은 번호 없으면 통과
        await http.get('/api/users/cellphone/' + value)
        return true
    } catch (e) {
        // 같은 휴대폰 번호 있으면 409(Conflict) 응답
        // "statusCode": 409,
        // "message": "존재하는 휴대폰 번호입니다.",
        // "error": "Conflict"
        if (e.response.data.error === 'Conflict') {
            return '사용 중인 번호입니다.'
        }
        return '시스템 오류(관리자에 문의)'
    }
})
