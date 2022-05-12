export default ({ store }, inject) => {
  inject('notifier', {
    showResponseMessage(response) {
      let color = 'grey'
      switch (response.status) {
        case 200:
          color = 'success'
          break
        case 404:
          color = 'warning'
          break
        case 422:
          color = 'info'
          break
        case 500:
          color = 'error'
          break
        default:
          color = 'grey'
          break
      }
      const message = response.data.message || 'Something went wrong :C'
      const data = {
        message,
        color,
        show: true
      }
      store.commit('snackbar/SET_SNACKBAR_DATA', data)
    },
    showMessage(message, color) {
      const data = {
        message,
        color,
        show: true
      }
      store.commit('snackbar/SET_SNACKBAR_DATA', data)
    }
  })
  
}