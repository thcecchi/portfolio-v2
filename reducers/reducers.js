import Immutable from 'immutable'
import { combineReducers } from 'redux'
import {
  START_APP
} from '../actions/actions'

// 1 //
function appStarter(state = {
  isFetching: true
}, action) {
  switch (action.type) {
  case START_APP:
    console.log('starting app reducer')
    return Object.assign({}, state, {
      isFetching: false,
      headerText: "I'm Tyler Cecchi",
      subHeaders: [{
          subHeadText: "A designer and front end developer living in Charleston, SC"
        },
        {
          subHeadText: "Here are a couple of web things I've created recently"
      }],
      projects: [{
          linkData: {
            linkText: "HoopStats",
            linkUrl: "#"
          },
          descriptionData: {
            projectDescription: "HoopStats allows NBA fans to quickly search for player info, season statistic and shooting percentages."
          }
        },
        {
          linkData: {
            linkText: "DaFans",
            linkUrl: "#"
          },
          descriptionData: {
            projectDescription: "DaFans is a geolocated messaging site that allows NFL fans to chat with other who are in the same city or town."
          }
      }]
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  appStarter
})

export default rootReducer
