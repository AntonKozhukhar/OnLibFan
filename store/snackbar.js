export const state = () => ({
  show: false,
  color: 'grey',
  message: '',
  timeout: 4000
})

export const mutations = {
  showMessage (state, payload) {
    state.message = payload.message
    state.color = payload.color
    state.show = payload.show
  }
}