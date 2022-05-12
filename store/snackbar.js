export const state = () => ({
  snackbarData: {
    show: false,
    color: 'grey',
    message: ''
  }
})

export const mutations = {
  SET_SNACKBAR_DATA: (state, data) => state.snackbarData = data
}