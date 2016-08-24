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
          subHeadText: "Here are a couple of web things I've created recently:"
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
      },
      bodyCopy: [{
        bodyText: "My focus is at the intersection of communication and and front end web technology. I enjoy thinking about and building new ways to tell stories on the web through data visualization interactive editorial and content strategy, I love to talk shop -- contact me at:"
      }],
      contactLinks: [{
        linkData: {
          linkText: "thcecchi@gmail.com",
          linkUrl: "#",
          seperator: true
        }
      },
      {
        linkData: {
          linkText: "@tylercecchi",
          linkUrl: "#"
        }
      }]
    })
    case TOGGLE_MENU:
      console.log('toggle Menu reducer')
      console.log(action.menuState)
      return Object.assign({}, state, {
        menu: {
          menuState: action.menuState,
          menuOpen: action.menuOpen,
          menuBtnText: "Menu",
          menuItems: [{
            linkData: {
              menuTitle: true,
              linkText: "Code",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "github",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "codePen",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuTitle: true,
              linkText: "Writing",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "medium",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuTitle: true,
              linkText: "Contact",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "email",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "twitter",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuTitle: true,
              linkText: "Resume",
              linkUrl: "#"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "pdf",
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
