export const TAB_RECORD = (state, tabName) => {
  window.localStorage.setItem('tabHistory', tabName);
  state.tabHistory = tabName;
  return state.tabHistory;
}

export const USER_ACCOUNT_ID = (state, userId) => {
  state.userAccountId = userId;
  return state.userAccountId;
}

export const TOKEN = (state, token) => {
  state.token = token;
  return state.token;
}

export const SIDE_BAR = (state, sideBar) => {
  state.sideBar = sideBar;
  return state.sideBar;
}

export const ADD_TAG_VIEW = (state, newView) => {
  if (state.tagView.some(view => view.path === newView.path)) {
    return;
  }
  state.tagView.push({
    name: newView.name,
    path: newView.path,
    title: newView.meta.title || '无名'
  })

  return state.tagView;
}
export const DEL_TAG_VIEW = (state, delView) => {
  for (const [index, view] of state.tagView.entries()) {
    if (view.path === delView.path) {
      state.tagView.splice(index, 1);
      break;
    }
  }

  return state.tagView;
}

