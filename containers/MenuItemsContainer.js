import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Link from '../components/Link'

class MenuItemsContainer extends Component {
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
    return (
      <div>
        <StyleRoot>
            {this.props.menuItemsData.map((item, i) =>
              <Link key={i} menuItem={true} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} />
            )}
        </StyleRoot>
      </div>
    )
  }
}

MenuItemsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  console.log('state')
  console.log(state)
  const { headerText, subHeaders, projects, menu } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(MenuItemsContainer)
