import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import Link from '../components/Link'
import ProjectDescription from '../components/ProjectDescription'

class Project extends Component {
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
    console.log('Project')
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
          <StyleRoot>
            <Link linkText={this.props.linkData.linkText} linkUrl={this.props.linkData.linkUrl}/>
            <ProjectDescription descriptionText={this.props.descriptionData.descriptionText}/>
          </StyleRoot>
      </div>
    )
  }
}

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { projects } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(Project)
