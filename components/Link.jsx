import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Radium from 'radium'
import FontAwesome from 'react-fontawesome'

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
       transition: "color .1s ease-in",
       ":hover": {
        textDecoration: "underline",
        color: '#F3410E'
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
      paddingBottom: "10%",
      fontSize: "14px",
      marginTop: "-10px",
      opacity: "0",
      position: "relative",
      transition: "opacity .2s ease-in"
    },
    transition: {
     opacity: "1",
     top: "0px"
    },
    menuTitle: {
      fontFamily: 'Roboto Mono',
      letterSpacing: "1.25",
      fontWeight: "100",
      color: "#282830",
      display: "inline-block",
      paddingBottom: "1%",
      fontSize: "16px",
      opacity: "0",
      position: "relative",
      transition: "opacity .2s ease-in"
    },
    contactLink: {
      "@media (max-width : 768px)": {
        fontSize: "10px"
       }
    },
    seperatorStyle: {
      color: '#ff6a40',
      fontFamily: 'Roboto Mono',
      marginLeft: "10%",
      letterSpacing: 1,
      fontWeight: 100,
      fontSize: "14px",
      display: "inline"
    },
    iconStyle: {
      color: '#ff6a40',
      opacity: '1',
      fontSize: "20px",
      textDecoration: "none",
      transition: "color .1s ease-in",
      ":hover": {
        color: '#F3410E'
      }
    }
   }
  }

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.menuTitle || this.props.menuItem) {
    var num = this.props.itemNum * 10

      setTimeout(function() {
        this.setState({transition: true});
      }.bind(this), num);
    }
  }

  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
    <ReactCSSTransitionGroup transitionName="example">
      <div style={[styles.linkContainer, this.props.inlineContainer && styles.inlineContainer]}>

        {this.props.icon ?
          <a href={this.props.linkUrl} style={styles.iconStyle} key={this.props.iconName} target="_blank">
            <FontAwesome
              className={this.props.iconName}
              name={this.props.iconName}
            />
          </a>
          : <div></div>
        }

        {this.props.menuTitle ?
          <p style={[styles.menuTitle, this.state.transition && styles.transition]}>{this.props.linkText}</p>
        : <a href={this.props.linkUrl} target="_blank" style={[styles.linkText,
                                            this.props.menuItem && styles.menuItem,
                                            this.props.inline && styles.inline,
                                            this.props.contactLink && styles.contactLink,
                                            this.state.transition && styles.transition]}>{this.props.linkText}</a>
        }

        {this.props.seperator ?
            <p style={styles.seperatorStyle}>//</p>
          : <div></div>
        }
      </div>
      </ReactCSSTransitionGroup>
    )
  }
}

Link.propTypes = {

}

module.exports = Radium(Link)
