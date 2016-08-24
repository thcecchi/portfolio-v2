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
       width: "100%"
     },
     bodyCopyText: {
      fontSize: "14px",
      color: "#282830",
      fontFamily: "Roboto Mono",
      letterSpacing: 1.75,
      lineHeight: "1.75",
      fontWeight: 100,
      marginBottom: "0"
     }
   };
  }
  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.bodyCopyContainer}>
        {this.props.BodyCopyData.map((item, i) =>
          <p style={styles.bodyCopyText} key={i}>{item.bodyText}</p>
        )}
      </div>
    )
  }
}

BodyCopy.propTypes = {

}

module.exports = Radium(BodyCopy)
