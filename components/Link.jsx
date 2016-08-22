import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Link extends Component {
  getStyles() {

   return {
     linkContainer: {
       backgroundColor: "#fff",
       marginLeft: "5%",
       marginTop: "3%",
       position: "relative",
       width: "100%"
     },
     linkText: {
       color: '#ff3800',
       fontFamily: 'Roboto Mono',
       letterSpacing: 1.25,
       fontWeight: 100,
       fontSize: "16px",
       textDecoration: "none",
       ":hover": {
        textDecoration: "underline",
       }
     },
     menuItem: {
      display: "block",
      width: "25%",
      paddingLeft: "75%"
    }
   };
  }

  logProps() {
    console.log('link')
    console.log(this.props)
  }

  render() {
  this.logProps();
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.linkContainer}>
        <a href={this.props.linkUrl} style={[styles.linkText, this.props.menuItem && styles.menuItem]}>{this.props.linkText}</a>
      </div>
    )
  }
}

Link.propTypes = {

}

module.exports = Radium(Link)
