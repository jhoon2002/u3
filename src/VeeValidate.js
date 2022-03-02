import { configure, defineRule } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import ko from '@vee-validate/i18n/dist/locale/ko.json'

configure({
    generateMessage: localize({
        ko,
    }),
})

setLocale('ko')

Object.keys(AllRules).forEach(rule => {
    defineRule(rule, AllRules[rule])
})
