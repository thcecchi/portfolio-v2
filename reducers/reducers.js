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
    return Object.assign({}, state, {
      headerText: "I'm Tyler Cecchi",
      subHeaders: [{
          subHeadText: "A designer and developer working at the intersection of communication and technology"
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
            projectDescription: "DaFans is a geolocated messaging site that allows NFL fans to chat with other fans who are in the same city or town."
          }
      }],
      menu: {
        menuState: "closed",
        menuBtnText: "Menu"
      },
      bodyCopy: [{
        bodyText: "My focus is at the intersection of communication and and front end web technology. I enjoy thinking about and building new ways to tell stories on the web through data visualization, interactive editorial and content strategy. I love to talk shop -- contact me at:"
      }],
      contactLinks: [{
        linkData: {
          linkText: "thcecchi@gmail.com",
          linkUrl: "mailto:thcecchi@gmail.com",
          seperator: true
        }
      },
      {
        linkData: {
          linkText: "@tylercecchi",
          linkUrl: "https://twitter.com/tylercecchi"
        }
      }],
      footer: {
        footerLinks: [{
          linkData: {
            iconName: "github-alt",
            linkUrl: "https://github.com/thcecchi"
          }
        },
        {
          linkData: {
            iconName: "codepen",
            linkUrl: "https://codepen.io/thcecchi/"
          }
        },
        {
          linkData: {
            iconName: "medium",
            linkUrl: "https://medium.com/@tylercecchi"
          }
        },
        {
          linkData: {
            iconName: "twitter",
            linkUrl: "https://twitter.com/tylercecchi"
          }
        }]
      }
    })
    case TOGGLE_MENU:
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
              linkUrl: "https://github.com/thcecchi"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "codePen",
              linkUrl: "https://codepen.io/thcecchi/"
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
              linkUrl: "https://medium.com/@tylercecchi"
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
              linkUrl: "mailto:thcecchi@gmail.com"
            }
          },
          {
            linkData: {
              menuItem: true,
              linkText: "twitter",
              linkUrl: "https://twitter.com/tylercecchi"
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
              linkUrl: "/img/resume_tyler_cecchi.pdf"
            }
          }]
        }
      })
    case SELECT_PROJECT:
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
                  linkUrl: "http://hoopstats.info"
                }
              },
              {
                linkData: {
                  linkText: "GitHub",
                  linkUrl: "https://github.com/thcecchi/nba-app"
                }
            }],
            projectImgs: {
              imageSrc: "../img/hoopstats-search.png"
            },
            projectBody: [{
              bodyText: "HoopStats is an app that helps users to search for NBA player's stats faster and more efficiently. While there are plently of sites where you can look up LeBron James' season averages and shooting percentages, most sites force users to visit different pages for each player they want to look up which can make the overall experience a bit clunky and time consuming. Additonally, many sites present statistics in a table, which appears well organized, but is actually quite difficult to read at a glance and scan. While HoopStats does not offer the depth of statistics as other resources, the experience lends itself much better to quickly referencing stats while watching a game or talking hoops with friends."
            },
            {
              imageSrc: "../img/hoopstats-stats.png",
              bodyText: "Using the NBA's stats API I built HoopStats as a site that pulls down each player's statistics when users first enter the site. Since there are only around 350 players in the NBA's data set, it's a cheap upfront expense that allows for faster searches later on."
            },
            {
              imageSrc: "../img/hoopstats-shots.png",
              bodyText: "Other statistics sites assume that users want all stats in one place. HoopStats challenges that idea by initially only displaying season averages in points, assists, rebounds, what school or country the player is from and thier PIE%, which is essentially an evaluation of the value that player adds when they are only the floor. The information is designed to be quickly and easily scanned. Should the user want specific shooting stats, they are available via pie charts on a subsequent screen. Assuming that users will jump around from player to player, the ability to search for another player is present on all three screens in the app. A custom autocomplete was also built to assist users in typing player's names in the search."
            }],
            menu: {
              menuState: "closed",
              menuBtnText: "Menu"
            },
            contactLinks: [{
              linkData: {
                linkText: "thcecchi@gmail.com",
                linkUrl: "mailto:thcecchi@gmail.com",
                seperator: true
              }
            },
            {
              linkData: {
                linkText: "@tylercecchi",
                linkUrl: "https://twitter.com/tylercecchi"
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
                  linkUrl: "https://daafans.herokuapp.com",
                }
              },
              {
                linkData: {
                  linkText: "GitHub",
                  linkUrl: "https://github.com/thcecchi/daFans"
                }
            }],
            projectImgs: {
              imageSrc: "../img/daafans-thread.png"
            },
            projectBody: [{
              bodyText: "Those who live in a city with no NFL team, or those who are a fan of a team from another city know what it's like to feel disconnected from the rest of the fan base. Of course there are always blog comment sections where one can get into a spirited debate, but nothing can replace the local feel that's lost when rooting for a team from another city."
            },
            {
              imageSrc: "../img/daafans-post.png",
              bodyText: "DaaFans is a geolocated messaging app designed to connect NFL fans in the same city. Nothing can replace being in the same city where your team is from, but DaaFans aims to help improve the experience by connecting fans who cheer for a team from another city. When fans arrive at DaaFans, the app finds their location and presents them with dedicated channels for each NFL team where only those in the same geographic area can view the channel's content."
            },
            {
              imageSrc: "../img/daafans-menu.png",
              bodyText: "In each channel, fans are presented with a message feed and the ability to post new messages or reply to existing ones. Messages are anonymous and stay in the feed for one week before they are deleted."
            }]
          },
          menu: {
            menuState: "closed",
            menuBtnText: "Menu"
          },
          contactLinks: [{
            linkData: {
              linkText: "thcecchi@gmail.com",
              linkUrl: "mailto:thcecchi@gmail.com",
              seperator: true
            }
          },
          {
            linkData: {
              linkText: "@tylercecchi",
              linkUrl: "https://twitter.com/tylercecchi"
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
