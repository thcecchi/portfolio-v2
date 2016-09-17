import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Radium from 'radium'
import { toggleMenu } from '../actions/actions'

let createHandlers = function(dispatch) {
  let onClick = function(node, data) {
    dispatch(actions.nodeClicked(data))
  };

  return {
    onClick
  };
}

export default class MenuBtn extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);
    this.state = {active: false};
  }

  getStyles() {
   return {
     menuBtnContainer: {
       marginRight: "5%",
       marginTop: "3%",
       marginBottom: "3%",
       position: "relative"
     },
     menuBtnText: {
       color: '#ff6a40',
       fontFamily: 'Roboto Mono, monospace',
       letterSpacing: 1.75,
       fontWeight: 100,
       fontSize: "16px",
       cursor: "pointer",
       textDecoration: "underline",
       textAlign: "right"
     },
     menuOpen: {
       textDecoration: "line-through"
     }
   }
  }

  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div style={styles.menuBtnContainer}>
          <p onClick={() => this.props.dispatch(toggleMenu())} style={[styles.menuBtnText, this.props.menuOpen && styles.menuOpen]}>{this.props.menuBtnText}</p>
      </div>
    )
  }
}

MenuBtn.propTypes = {

}

MenuBtn = Radium(MenuBtn)
export default connect()(MenuBtn);
