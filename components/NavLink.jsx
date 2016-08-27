import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import Radium from 'radium'
var RouterLink = require('react-router').Link;
RouterLink = Radium(Link);

export default class NavLink extends Component {
  getStyles() {

   return {
     linkContainer: {
      display: "inline-block",
       backgroundColor: "#fff",
       marginLeft: "1%",
       marginTop: "1%",
       position: "relative",
       width: "100%"
     },
     linkText: {
       color: '#ff6a40',
       fontFamily: 'Roboto Mono',
       letterSpacing: 1.25,
       fontWeight: 100,
       fontSize: "16px",
       textDecoration: "none",
       ":hover": {
        textDecoration: "underline",
       }
     },
     inlineContainer: {
       marginLeft: "5%",
       marginTop: "1%",
       marginBottom: "3%",
       width: "auto"
     },
     menuItem: {
      display: "block",
      width: "25%",
      marginLeft: "75%",
      paddingBottom: "3%",
      fontSize: "12px"
    },
    menuTitle: {
      color: "#282830",
      display: "block",
      width: "25%",
      marginLeft: "75%",
      paddingBottom: "3%",
      fontSize: "14px",
      ":hover": {
        textDecoration: "none",
        cursor: "default"
      }
    },
    seperatorStyle: {
      color: '#ff6a40',
      fontFamily: 'Roboto Mono',
      marginLeft: "30px",
      letterSpacing: 1,
      fontWeight: 100,
      fontSize: "14px",
      display: "inline-block"
    }
   }
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
      <div style={[styles.linkContainer, this.props.inlineContainer && styles.inlineContainer]}>
      <RouterLink to={`${this.props.linkUrl}${this.props.linkId}`} style={[styles.linkText,
                                          this.props.menuItem && styles.menuItem,
                                          this.props.menuTitle && styles.menuTitle,
                                          this.props.inline && styles.inline]}>{this.props.linkText}</RouterLink>

        {this.props.seperator ?
            <p style={styles.seperatorStyle}>//</p>
          : <div></div>
        }
      </div>
    )
  }
}

NavLink.propTypes = {

}

module.exports = Radium(NavLink)
