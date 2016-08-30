import Immutable from 'immutable'
import { combineReducers } from 'redux'
import {
  START_APP, TOGGLE_MENU, SELECT_PROJECT
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
            linkId: "hoopstats",
            linkText: "HoopStats >",
            linkUrl: "/work/"
          },
          descriptionData: {
            projectDescription: "HoopStats allows NBA fans to quickly search for player info, season statistic and shooting percentages."
          }
        },
        {
          linkData: {
            linkId: "daafans",
            linkText: "DaaFans >",
            linkUrl: "/work/"
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
              linkText: "Code"
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
              linkText: "Writing"
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
              linkText: "Contact"
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
              linkText: "Resume"
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
    case SELECT_PROJECT:
      console.log('select project reducer')
      if(action.projectId == "hoopstats") {
        return Object.assign({}, state, {
          project: {
            headerText: "TC // Hoopstats",
            created: [{
              bodyText: "Created 2016"
            }],
            projectLinks: [{
                linkData: {
                  linkText: "Live Site",
                  linkUrl: "#"
                }
              },
              {
                linkData: {
                  linkText: "GitHub",
                  linkUrl: "#"
                }
            }],
            projectImgs: {
              imageSrc: "../img/hoopstats-search.png"
            },
            projectBody: [{
              bodyText: "This is body copy text 1."
            },
            {
              imageSrc: "../img/hoopstats-stats.png",
              bodyText: "This is body copy text 2."
            },
            {
              imageSrc: "../img/hoopstats-shots.png",
              bodyText: "This is body copy text 3."
            }],
            menu: {
              menuState: "closed",
              menuBtnText: "Menu"
            },
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
          }
        })
      } else if (action.projectId == "daafans") {
        return Object.assign({}, state, {
          project: {
            headerText: "TC // DaaFans",
            created: [{
              bodyText: "Created 2016"
            }],
            projectLinks: [{
                linkData: {
                  linkText: "Live Site",
                  linkUrl: "#"
                }
              },
              {
                linkData: {
                  linkText: "GitHub",
                  linkUrl: "#"
                }
            }],
            projectImgs: {
              imageSrc: "../img/daafans-thread.png"
            },
            projectBody: [{
              bodyText: "This is body copy text 1."
            },
            {
              imageSrc: "../img/daafans-post.png",
              bodyText: "This is body copy text 2."
            },
            {
              imageSrc: "../img/daafans-menu.png",
              bodyText: "This is body copy text 3."
            }]
          },
          menu: {
            menuState: "closed",
            menuBtnText: "Menu"
          },
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
      }
  default:
    return state
  }
}

const rootReducer = combineReducers({
  appStarter
})

export default rootReducer
