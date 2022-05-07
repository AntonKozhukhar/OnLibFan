import helpers from '../helpers/index'

const state = () => ({
  userToken: null,
  user: {}
})

const getters = {
  chekUserToken: ({userToken}) => !!userToken,
}

const mutations = {
  ADD_USER: (state, user) => state.user = user,
  ADD_USER_TOKEN: (state, token) => state.userToken = token,
  DELETE_USER: (state) => {
    state.user = {}
    state.userToken = null
  }
}

export const actions = {
  async registration({ commit }, data) {
    try {
      await this.$axios.post('registration', data)
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  },
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      commit('ADD_USER', res.data.data.user)
      commit('ADD_USER_TOKEN', res.data.data.token)
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  },
  async logout({ commit }, token) {
    try {
      await this.$axios.post(
        'logout',
        {},
        {headers: helpers.headersForLogOut(token)})
      commit('DELETE_USER')
    } catch (e) {
      this.$notifier.showMessage(e.response)
    }
  }
}

export default { state, mutations, actions, getters }