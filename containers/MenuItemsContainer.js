import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import {Motion, spring} from 'react-motion';
import { openApp } from '../actions/actions'
import Link from '../components/Link'

class MenuItemsContainer extends Component {

  getStyles() {
     return {
       menuItemsContainerStyle: {
         width: "25%",
         paddingLeft: "75%",
         "@media (max-width : 460px)": {
           paddingLeft: "50%"
          }
       }
     }
  }

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  handleChange(state) {
    this.setState(state)
  }

// logging props////////////
  logProps() {
    console.log('MenuItemsContainer')
    console.log(this.props)

  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    const styles = this.getStyles();
    return (
      <div style={styles.menuItemsContainerStyle}>
        {this.props.menuItemsData.map((item, i) =>
          <Link key={i} itemNum={i} menuItem={item.linkData.menuItem} menuTitle={item.linkData.menuTitle} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} />
        )}
      </div>
    )
  }
}

MenuItemsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('state')
  console.log(state)
  const { headerText, subHeaders, projects, menu } = state

  return {
    state
  }
}

MenuItemsContainer = Radium(MenuItemsContainer)
export default connect(mapStateToProps)(MenuItemsContainer);
