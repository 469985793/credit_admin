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
