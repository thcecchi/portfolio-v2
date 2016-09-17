import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class ProjectDescription extends Component {
  getStyles() {

   return {
      descriptionContainer: {
        backgroundColor: "#fff",
        marginLeft: "1%",
        marginRight: "1%",
        marginTop: "1%",
        position: "relative"
     },
     descriptionText: {
        color: '#282830',
        fontFamily: 'Roboto Mono, monospace',
        letterSpacing: 1.25,
        fontWeight: 100,
        fontSize: "12px",
        lineHeight: "1.75"
     }
   };
  }

  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.descriptionContainer}>
        <p style={styles.descriptionText}>{this.props.descriptionText}</p>
      </div>
    )
  }
}

ProjectDescription.propTypes = {

}

module.exports = Radium(ProjectDescription)
