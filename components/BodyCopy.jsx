import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class BodyCopy extends Component {
  getStyles() {

   return {
     bodyCopyContainer: {
       marginLeft: "5%",
       marginTop: "3%",
       marginBottom: "1%",
       position: "relative",
       width: "98%"
     },
     bodyCopyText: {
      fontSize: "14px",
      color: "#282830",
      fontFamily: "Roboto Mono",
      letterSpacing: 1.75,
      lineHeight: "1.75",
      fontWeight: 100,
      marginBottom: "0"
     },
     imageStyle: {
      boxShadow: "0 14px 28px rgba(255,106,64,0.25), 0 10px 10px rgba(255,106,64,0.22)",
      display: "block",
      marginTop: "10%",
      marginBottom: "10%"
     }
   };
  }

  logProps() {
    console.log('body copy')
    console.log(this.props)
  }

  render() {
    this.logProps();
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.bodyCopyContainer}>
        {this.props.BodyCopyData.imageSrc ?
          <div>
            <img src={this.props.BodyCopyData.imageSrc} style={styles.imageStyle}></img>
            <p style={styles.bodyCopyText}>{this.props.BodyCopyData.bodyText}</p>
          </div>
          : <p style={styles.bodyCopyText}>{this.props.BodyCopyData.bodyText}</p>
        }
      </div>
    )
  }
}

BodyCopy.propTypes = {

}

module.exports = Radium(BodyCopy)
