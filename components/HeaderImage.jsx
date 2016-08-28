import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class HeaderImage extends Component {
  getStyles() {

   return {
     imageContainer: {
       display: "block",
       position: "relative",
       width: "100%",
       marginTop: "20%",
       marginLeft: "5%"
     },
     imageStyle: {
      boxShadow: "0 14px 28px rgba(255,106,64,0.25), 0 10px 10px rgba(255,106,64,0.22)",
       display: "block"
     }
   };
  }
  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.imageContainer}>
        <img src={this.props.imageSrc} style={styles.imageStyle}></img>
      </div>
    )
  }
}

HeaderImage.propTypes = {

}

module.exports = Radium(HeaderImage)
