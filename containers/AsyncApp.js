import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Subhead from '../components/Subhead'
import Project from './Project'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(openApp())
  }

  handleChange(state) {
    this.setState(state)
  }

// logging props////////////
  logProps() {
    console.log('something')
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
        <StyleRoot>
          <Header headerText={this.props.state.appStarter.headerText}/>

          {this.props.state.appStarter.subHeaders ?
            <Subhead subHeaders={this.props.state.appStarter.subHeaders}/>
            : <p></p>
          }

          {this.props.state.appStarter.projects ?
            
            {this.props.state.appStarter.projects.map((item, i) =>
              <Project linkData={item.linkData} descriptionData={item.descriptionData}/>
            )}
            : <p></p>
          }

        </StyleRoot>
      </div>
    )
  }
}

AsyncApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  console.log('state')
  console.log(state)
  const { headerText, subHeaders, projects } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(AsyncApp)
