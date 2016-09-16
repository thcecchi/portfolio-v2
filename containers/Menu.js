import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import MenuBtn from '../components/MenuBtn'
import MenuItemsContainer from './MenuItemsContainer'

class Menu extends Component {

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

  render() {
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
        <StyleRoot>
            <MenuBtn menuOpen={this.props.MenuBtnData.menuOpen} menuBtnText={this.props.MenuBtnData.menuBtnText} />
            {this.props.MenuBtnData.menuState == 'open' ?
                <MenuItemsContainer menuItemsData={this.props.MenuBtnData.menuItems} />
              : <p></p>
            }
        </StyleRoot>
      </div>
    )
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { headerText, subHeaders, projects, menu } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(Menu)
