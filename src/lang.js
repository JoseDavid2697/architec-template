import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './assets/i18n/en.json'
import es from './assets/i18n/es.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'es',
  messages: {
    en, es
  }
})