import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import NavLink from '../components/NavLink'
import ProjectDescription from '../components/ProjectDescription'

class Project extends Component {

  getStyles() {
     return {
       projectCard: {
         backgroundColor: "#fff",
         marginLeft: "4%",
         marginRight: "4%"
       }
     }
   }

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
    const styles = this.getStyles();
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <StyleRoot>
        <div style={styles.projectCard}>
            <NavLink linkText={this.props.linkData.linkText} linkId={this.props.linkData.linkId} linkUrl={this.props.linkData.linkUrl}/>
            <ProjectDescription descriptionText={this.props.descriptionData.projectDescription}/>
        </div>
      </StyleRoot>
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
