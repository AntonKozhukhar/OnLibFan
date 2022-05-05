import helpers from '../helpers/index'

const state = () => ({
  userToken: null,
  user: {}
})

const mutations = {
  ADD_USER: (state, user) => state.user = user,
  ADD_USER_TOKEN: (state, token) => state.userToken = token
}

export const actions = {
  async registration({ commit }, data) {
    try {
      const res = await this.$axios.post('registration', data)
      commit('ADD_USER_TOKEN', res)
    } catch (e) {
      helpers.errorHandler(e)
    }
  },
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      commit('ADD_USER', res)
    } catch (e) {
      helpers.errorHandler(e)
    }
  }
}

export default { state, mutations, actions }