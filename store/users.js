import helpers from '../helpers/index'

const state = () => ({
  userToken: null,
  user: {}
})

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
      helpers.errorHandler(e.response)
    }
  },
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      commit('ADD_USER', res.data.user)
      commit('ADD_USER_TOKEN', res.data.token)
    } catch (e) {
      helpers.errorHandler(e.response)
    }
  },
  async logout({ commit }) {
    try {
      await this.$axios.post('logout')
      commit('DELETE_USER')
    } catch (e) {
      helpers.errorHandler(e.response)
    }
  }
}

export default { state, mutations, actions }