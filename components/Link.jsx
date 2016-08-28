import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

export default class Link extends Component {
  getStyles() {

   return {
     linkContainer: {
      display: "inline-block",
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
      paddingLeft: "75%",
      paddingBottom: "3%",
      fontSize: "12px"
    },
    menuTitle: {
      color: "#282830",
      display: "block",
      width: "25%",
      paddingLeft: "75%",
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
        <a href={this.props.linkUrl} style={[styles.linkText,
                                            this.props.menuItem && styles.menuItem,
                                            this.props.menuTitle && styles.menuTitle,
                                            this.props.inline && styles.inline]}>{this.props.linkText}</a>

        {this.props.seperator ?
            <p style={styles.seperatorStyle}>//</p>
          : <div></div>
        }
      </div>
    )
  }
}

Link.propTypes = {

}

module.exports = Radium(Link)
