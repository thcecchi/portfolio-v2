import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Link from '../components/Link'

class ContactLinkContainer extends Component {
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
    console.log('Contact Links')
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
        <StyleRoot>
            {this.props.ContactLinkData.map((item, i) =>
              <Link key={i} inlineContainer={true} seperator={item.linkData.seperator} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} />
            )}
        </StyleRoot>
      </div>
    )
  }
}

ContactLinkContainer.propTypes = {
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

export default connect(mapStateToProps)(ContactLinkContainer)
