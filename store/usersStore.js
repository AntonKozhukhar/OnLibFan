const state = () => ({
  authAction: 'login',
})

const mutations = {
  CHANGE_AUTH_STATUS: (state, desiredStatus) => (state.authAction = desiredStatus),
}

export const actions = {
  async registration({ commit }, data) {
    try {
      await this.$axios.post('registration', data)
      commit('CHANGE_AUTH_STATUS', 'login')
      this.$notifier.showMessage(
        'Registration successfully! Now you can Log In',
        'success'
      )
    } catch (e) {
      this.$notifier.showResponseMessage(e.response)
    }
  },
  async login(context, data) {
    try {
      const res = await this.$auth.loginWith('local', { data })
      await this.$auth.setUserToken(res.data.data.token)
      this.$auth.setUser(res.data.data.user)
      this.$notifier.showMessage('Login successfully!', 'success')
      await this.$router.push({ path: '/' })
    } catch (e) {
      this.$notifier.showResponseMessage(e.response)
    }
  },
  async logout() {
    try {
      await this.$auth.logout()
      this.$notifier.showMessage('Logout successfully!', 'success')
    } catch (e) {
      this.$notifier.showMessage('Something went wrong :c', 'warning')
    }
  },
  async updateProfile({ commit }, userData) {
    try {
      const res = await this.$axios.put('update-profile', { userData })
      await this.$auth.setUser(res.data.userData)
      return res.data.userData
    } catch (e) {
      this.$notifier.showResponseMessage(e.response)
    }
  },
}

export default { state, mutations, actions }
