import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Header extends Component {
  getStyles() {

   return {
     headerContainer: {
       backgroundColor: "#fff",
       marginLeft: "5%",
       marginTop: "3%"
     },
     headerText: {
       color: '#000',
       fontFamily: 'Roboto Mono',
       letterSpacing: 1.75,
       fontWeight: 100,
       fontSize: "24px",
       zIndex: "2",
      cursor: "pointer"
     }
   };
  }
  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.headerContainer}>
        <h1 key="header-text" key="header-text" style={styles.headerText}>{this.props.headerText}</h1>
      </div>
    )
  }
}

Header.propTypes = {

}

module.exports = Radium(Header)
