import Immutable from 'immutable'
import { combineReducers } from 'redux'
import {
  START_APP, TOGGLE_MENU
} from '../actions/actions'

// 1 //
function appStarter(state = {
  isFetching: true
}, action) {
  switch (action.type) {
  case START_APP:
    console.log('starting app reducer')
    return Object.assign({}, state, {
      headerText: "I'm Tyler Cecchi",
      subHeaders: [{
          subHeadText: "A designer and front end developer living in Charleston, SC"
        },
        {
          subHeadText: "Here are a couple of web things I've created recently"
      }],
      projects: [{
          linkData: {
            linkText: "HoopStats >",
            linkUrl: "#"
          },
          descriptionData: {
            projectDescription: "HoopStats allows NBA fans to quickly search for player info, season statistic and shooting percentages."
          }
        },
        {
          linkData: {
            linkText: "DaFans >",
            linkUrl: "#"
          },
          descriptionData: {
            projectDescription: "DaFans is a geolocated messaging site that allows NFL fans to chat with other who are in the same city or town."
          }
      }],
      menu: {
        menuState: "closed",
        menuBtnText: "Menu"
      }
    })
    case TOGGLE_MENU:
      console.log('toggle Menu reducer')
      console.log(action.menuState)
      return Object.assign({}, state, {
        menu: {
          menuState: action.menuState,
          menuBtnText: "Menu",
          menuItems: [{
            linkData: {
              linkText: "Github",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              linkText: "CodePen",
              linkUrl: "#"
            }
          }]
        }
      })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  appStarter
})

export default rootReducer
