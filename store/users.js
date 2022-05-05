import helpers from '../helpers/index'

export const state = () => ({
  userToken: 123,
  user: {}
})

export const mutations = {
  ADD_USER: (state, user) => state.user = user,
  ADD_USER_TOKEN: (state, token) => state.userToken = token
}

export const actions = {
  async registration({ commit }, data) {
    try {
      const res = await this.$axios.post(
        'registration', data,
        { headers: helpers.setHeaders() }
      )
      commit('ADD_USER_TOKEN', res)
    } catch (e) {
      helpers.errorHandler(e)
    }
  },
  async login({ commit }, data) {
    try {
      const res = await this.$axios.post(
        'login', data,
        { headers: helpers.setHeaders() }
      )
      commit('ADD_USER', res)
    } catch (e) {
      helpers.errorHandler(e)
    }
  }
}

