import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import Link from '../components/Link'
import ProjectDescription from '../components/ProjectDescription'

var projectCard = {
  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
  backgroundColor: "#fff",
  width: "80%",
  borderRadius: "5px",
  marginLeft: "5%",
  padding: "1%",
  marginBottom: "3%",
  ":hover": {
    backgroundColor: "#000"
  }
}

class Project extends Component {

  getStyles() {
     return {
       projectCard: {
         boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
         transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
         backgroundColor: "#fff",
         width: "80%",
         borderRadius: "2px",
         marginLeft: "5%",
         padding: "1%",
         marginBottom: "3%",
         ":hover": {
           boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
           cursor: "pointer"
         }
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

// logging props////////////
  logProps() {
    console.log('Project')
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const styles = this.getStyles();
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <StyleRoot>
        <div style={styles.projectCard}>
            <Link linkText={this.props.linkData.linkText} linkUrl={this.props.linkData.linkUrl}/>
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
