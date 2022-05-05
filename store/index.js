const state = () => ({
  snackbarData: {
    show: false,
    color: 'grey',
    message: '',
    timeout: 4000
  },
})

const mutations = {
  SET_SNACKBAR_DATA: (state, data) => state.snackbarData = data,
}

export default {mutations, state}