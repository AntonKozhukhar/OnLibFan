import users from '../store/users'

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
}
