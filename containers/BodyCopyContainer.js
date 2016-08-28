import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import BodyCopy from '../components/BodyCopy'

class BodyCopyContainer extends Component {
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
    console.log('Body Copy Container')
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div>
        <StyleRoot>
            {this.props.bodyCopyContainerData.map((item, i) =>
                  <BodyCopy BodyCopyData={item} key={i}/>
            )}
        </StyleRoot>
      </div>
    )
  }
}

BodyCopyContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  console.log('state')
  console.log(state)
  const { headerText, subHeaders, projects } = state

  return {
    state
  }
}

export default connect(mapStateToProps)(BodyCopyContainer)
