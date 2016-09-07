import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class HeaderImage extends Component {
  getStyles() {

   return {
     imageContainer: {
       display: "block",
       position: "relative",
       marginTop: "10%",
       marginLeft: "5%"
     },
     imageStyle: {
      width: "50%",
      height: "auto",
      boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      display: "block",
      border: "1px solid #282830"
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
