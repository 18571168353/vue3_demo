import { createI18n } from 'vue-i18n' //引入i18n
import ZH from './zh'
import EN from './en'
const message = {
  zh: {
    ...ZH
  },
  en: {
    ...EN
  }
}

const getCurrentLanguage = () => {
  const UAlang = navigator.language //获取当前浏览器语言
  const langCode = UAlang.indexOf('zh') !== -1 ? 'zh' : 'en' //如果当前浏览器语言是zh就存入zh，否则就是en
  localStorage.setItem('lang', langCode) //存入localStorage
  return langCode
}
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getCurrentLanguage() || 'zh',
  messages: message
})
export default i18n