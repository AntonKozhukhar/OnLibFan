export const state = () => ({
  snackbarData: {
    show: false,
    color: 'grey',
    message: '',
  }
})

export const mutations = {
  SHOW_MESSAGE: (state, data) => state.snackbarData = data
}