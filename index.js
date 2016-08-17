import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Root from './containers/Root'

const store = configureStore()

render((
<Provider store={store}>
  <Router history={hashHistory}>
      <Route path="/" component={Root} />
    </Router>
</Provider>
), document.getElementById('root'));
