export default function({ store, redirect }) {
  // If the user is not authenticated
  console.log(store.getters['users/isUserLogged'])
  // if (!store.getters['users/isUserLogged']) {
  //   return redirect('/login')
  // }
}
