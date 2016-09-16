import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Project from './Project'

class ProjectContainer extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  handleChange(state) {
    this.setState(state)
  }

  render() {
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
        <StyleRoot>
            {this.props.ProjectData.map((item, i) =>
              <Project key={i} linkData={item.linkData} descriptionData={item.descriptionData}/>
            )}
        </StyleRoot>
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { headerText, subHeaders, projects } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(ProjectContainer)
