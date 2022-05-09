export default ({ store }, inject) => {
  inject('headers', {
    setHeaders() {
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${store.state.users.userToken}`
      }
    }
  })
}