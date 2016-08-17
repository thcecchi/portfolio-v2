export const START_APP = 'START_APP'

function startApp() {
  console.log('start app action')
  return {
    type: START_APP
  }
}


export function openApp() {
  console.log('app started action')
  return (dispatch, getState) => {
    console.log(getState())
    dispatch(startApp())
  }
}
