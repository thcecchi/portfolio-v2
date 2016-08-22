import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Subhead extends Component {
  getStyles() {

   return {
     subHeaderContainer: {
       backgroundColor: "#fff",
       marginLeft: "5%",
       marginTop: "3%",
       marginBottom: "3%",
       position: "relative",
       width: "100%"
     },
     subHeaderText: {
       color: '#282830',
       fontFamily: 'Roboto Mono',
       letterSpacing: 1.75,
       lineHeight: "1.75",
       fontWeight: 100,
       fontSize: "16px"
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
      <div style={styles.subHeaderContainer}>
        {this.props.subHeaders.map((item, i) =>
          <p style={styles.subHeaderText} key={i}>{item.subHeadText}</p>
        )}
      </div>
    )
  }
}

Subhead.propTypes = {

}

module.exports = Radium(Subhead)
