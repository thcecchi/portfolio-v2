export const START_APP = 'START_APP'
export const TOGGLE_MENU = 'TOGGLE_MENU'

function startApp() {
  console.log('start app action')
  return {
    type: START_APP
  }
}

function menuToggle(menuState, menuOpen) {
  console.log('toggle menu action')
  return {
    type: TOGGLE_MENU,
    menuState: menuState,
    menuOpen: menuOpen
  }
}


export function openApp() {
  console.log('app started action')
  return (dispatch, getState) => {
    dispatch(startApp())
  }
}

export function toggleMenu() {
  console.log('app started action')
  return (dispatch, getState) => {
    console.log(getState())
    var state = getState();
    if(state.appStarter.menu.menuState == 'closed') {
      dispatch(menuToggle('open', true))
    }

    else {
      dispatch(menuToggle('closed', false))
    }
  }
}
