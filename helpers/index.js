import users from '../store/users'
import global from '../store/global'

export default {
  setHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${users.state().userToken}`
    }
  },
  headersForLogOut(token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  },
  errorHandler(response) {
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
    global.SET_SNACKBAR_DATA({
      show: true,
      color,
      message
    })
  }
}
