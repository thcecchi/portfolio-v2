import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Root from './containers/Root'
import Work from './containers/Work'

const store = configureStore()

render((
<Provider store={store}>
  <Router history={browserHistory}>
      <Route path="/" component={Root} />
      <Route path="/work/:linkId" component={Work}/>
    </Router>
</Provider>
), document.getElementById('root'));
