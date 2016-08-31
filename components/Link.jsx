import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
      paddingBottom: "10%",
      fontSize: "12px",
      opacity: "0.1",
      transition: "opacity .1s ease-in"
    },
    transition: {
     opacity: "1"
    },
    menuTitle: {
      fontFamily: 'Roboto Mono',
      letterSpacing: 1.25,
      fontWeight: 100,
      color: "#282830",
      display: "inline-block",
      paddingBottom: "1%",
      fontSize: "14px",
      opacity: "0.1",
      transition: "opacity .1s ease-in"
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

  componentDidMount() {
    const { dispatch } = this.props
    if (this.props.menuTitle || this.props.menuItem) {
    var num = this.props.itemNum * 25

      setTimeout(function() {
        this.setState({transition: true});
      }.bind(this), num);
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
    <ReactCSSTransitionGroup transitionName="example">
      <div style={[styles.linkContainer, this.props.inlineContainer && styles.inlineContainer]}>
        {this.props.menuTitle ?
          <p style={[styles.menuTitle, this.state.transition && styles.transition]}>{this.props.linkText}</p>
        : <a href={this.props.linkUrl} style={[styles.linkText,
                                            this.props.menuItem && styles.menuItem,
                                            this.props.inline && styles.inline,
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
