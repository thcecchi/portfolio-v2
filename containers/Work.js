import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Subhead from '../components/Subhead'
import HRule from '../components/HRule'
import BodyCopy from '../components/BodyCopy'
import ProjectContainer from './ProjectContainer'
import Menu from './Menu'
import ContactLinks from './ContactLinks'

var wrapper = {
  width: "100%",
  float: "left",
  display: "flex",
  position: "relative"
}

var leftCol = {
  width: "50%",
  float: "left",
  flex: "1"
}

var rightCol = {
  width: "50%",
  float: "left",
  flex: "1"
}

class Work extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(findWorkById(this.props.params.linkId))
  }

  handleChange(state) {
    this.setState(state)
  }

// logging props////////////
  logProps() {
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div style={wrapper}>
          <div style={leftCol}>
            <Header headerText={this.props.state.appStarter.headerText}/>


            {this.props.state.appStarter.contactLinks ?
                <ContactLinks ContactLinkData={this.props.state.appStarter.contactLinks}/>
              : <p></p>
            }
          </div>
          <div style={rightCol}>
            {this.props.state.appStarter.menu ?
                <Menu MenuBtnData={this.props.state.appStarter.menu}/>
              : <p></p>
            }
          </div>
      </div>
    )
  }
}

Work.propTypes = {
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

export default connect(mapStateToProps)(Work)
