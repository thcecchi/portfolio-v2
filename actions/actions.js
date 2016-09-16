export const START_APP = 'START_APP'
export const TOGGLE_MENU = 'TOGGLE_MENU'
export const SELECT_PROJECT = 'SELECT_PROJECT'

function startApp() {
  return {
    type: START_APP
  }
}

function menuToggle(menuState, menuOpen) {
  return {
    type: TOGGLE_MENU,
    menuState: menuState,
    menuOpen: menuOpen
  }
}

function findProject(id) {
  return {
    type: SELECT_PROJECT,
    projectId: id
  }
}


export function openApp() {
  return (dispatch, getState) => {
    dispatch(startApp())
  }
}

export function toggleMenu() {
  return (dispatch, getState) => {
    var state = getState();
    if(state.appStarter.menu.menuState == 'closed') {
      dispatch(menuToggle('open', true))
    }

    else {
      dispatch(menuToggle('closed', false))
    }
  }
}

export function findWorkById(id) {
  return (dispatch, getState) => {
    var state = getState();
    dispatch(findProject(id))
  }
}
