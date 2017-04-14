import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Shade extends Component {
  getStyles() {
   return {
     shade: {
       opacity: "0",
       width: "100%",
       height: "100%",
       zIndex: "-5",
       position: "absolute",
       background: "#fff",
       transition: "opacity .1s ease-in"
     },
     menuOpen: {
      opacity: ".95",
      zIndex: "5"
     }
   };
  }

  render() {
    const { value, options } = this.props
    const styles = this.getStyles();
    return (
      <div style={[styles.shade, this.props.shadeState && styles.menuOpen]}>
      </div>
    )
  }
}

Shade.propTypes = {

}

module.exports = Radium(Shade)
