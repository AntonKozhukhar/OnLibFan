export default ({ app, store }, inject) => {
  inject('notifier', {
    showMessage (response) {
      let color = 'grey'
      let message = response.statusText
      switch (response.status) {
        case 200:
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
      message = response.data.message || message
      const data = {
        message,
        color,
        show: true
      }
      store.commit('snackbar/showMessage', data)
    }
  })
}