export const TAB_RECORD = ({ commit }, tabName) => {
  commit('TAB_RECORD', tabName);
}

export const USER_ACCOUNT_ID = ({ commit }, userId) => {
  commit('USER_ACCOUNT_ID', userId);
}

export const TOKEN = ({ commit }, token) => {
  commit('TOKEN', token);
}

export const SIDE_BAR = ({ commit }, sideBar) => {
  commit('SIDE_BAR', sideBar);
}

export const ADD_TAG_VIEW = ({ commit }, newView) => {
  commit('ADD_TAG_VIEW', newView);
}

export const DEL_TAG_VIEW = ({ commit, state }, delView) => {
  return new Promise((resolve) => {
    commit('DEL_TAG_VIEW', delView)
    resolve([...state.tagView])
  })
}
