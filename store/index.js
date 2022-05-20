const state = () => ({
  sidebarStatus: false
})

const mutations = {
  SET_SIDEBAR_STATUS: (state, toggleStatus) => (state.sidebarStatus = toggleStatus)
}

export default { state, mutations }