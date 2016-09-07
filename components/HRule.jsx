import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class HRule extends Component {
  getStyles() {

   return {
     HRule: {
       marginLeft: "5%",
       marginRight: "5%",
       marginTop: "3%",
       marginBottom: "3%",
       position: "relative",
       borderBottom: "1px solid #ff6a40"
     }
   };
  }
  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.HRule}>
      </div>
    )
  }
}

HRule.propTypes = {

}

module.exports = Radium(HRule)
