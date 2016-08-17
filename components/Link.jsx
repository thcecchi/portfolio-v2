import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Link extends Component {
  getStyles() {

   return {
     linkContainer: {
       backgroundColor: "#fff",
       marginLeft: "5%",
        marginTop: "1%",
        position: "relative"
     },
     linkText: {
       color: '#000',
       fontFamily: 'Roboto Mono',
       letterSpacing: 1.75,
       fontWeight: 100,
       fontSize: "16px",
       textDecoration: "underline"
     }
   };
  }

  logProps() {
    console.log(this.props)
  }

  render() {
  this.logProps();
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div>
        <a href={this.props.linkUrl}>{this.props.projectTitle}</a>
      </div>
    )
  }
}

Link.propTypes = {

}

module.exports = Radium(Link)
