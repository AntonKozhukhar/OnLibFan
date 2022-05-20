const state = () => ({
  sidebarStatus: null,
})

const mutations = {
  SET_SIDEBAR_STATUS: (state, toggleStatus) => (state.sidebarStatus = toggleStatus )
}

const getters = {
  getSidebarStatus({sidebarStatus}) {
    return sidebarStatus
  }
}

export default { state, mutations, getters }