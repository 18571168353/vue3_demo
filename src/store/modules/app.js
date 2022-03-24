import router from '@/router'
import { setTokenTime } from '@/utils/tokentime'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    siderType: true,
    lang: localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeSiderType(state) {
      state.siderType = !state.siderType
    },
    changelang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        Post('login', userInfo)
          .then((res) => {
            commit('setToken', res.token)
            setTokenTime()
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}
