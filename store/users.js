const state = () => ({
  userToken: null,
  user: {},
  authStatus: 'login'
})

const getters = {
  checkUserToken: ({ userToken }) => !!userToken
}

const mutations = {
  ADD_USER: (state, user) => state.user = user,
  ADD_USER_TOKEN: (state, token) => state.userToken = token,
  DELETE_USER: (state) => {
    state.user = {}
    state.userToken = null
  },
  CHANGE_AUTH_STATUS: (state, desiredStatus) => state.authStatus = desiredStatus
}

export const actions = {
  async registration({ commit }, data) {
    try {
      const res = await this.$axios.post('registration', data)
      this.CHANGE_AUTH_STATUS('login')
      this.$notifier.showMessage(res)
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  },
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      commit('ADD_USER', res.data.data.user)
      commit('ADD_USER_TOKEN', res.data.data.token)
      this.$notifier.showMessage(res)
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  },
  async logout({ commit }) {
    try {
      const res = await this.$axios.post(
        'logout',
        {},
        { headers: this.$headers.setHeaders() }
      )
      commit('DELETE_USER')
      this.$notifier.showMessage(res)
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  }
}

export default { state, mutations, actions, getters }