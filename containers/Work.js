import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Radium, StyleRoot} from 'radium'
import { openApp, findWorkById } from '../actions/actions'
import Header from '../components/Header'
import HRule from '../components/HRule'
import Subhead from '../components/Subhead'
import HeaderImage from '../components/HeaderImage'
import Link from '../components/Link'
import Menu from './Menu'
import ContactLinks from './ContactLinks'
import BodyCopyContainer from './BodyCopyContainer'

var wrapper = {
  width: "100%",
  float: "left",
  display: "flex",
  position: "relative"
}

var leftCol = {
  width: "50%",
  float: "left",
  flex: "1"
}

var rightCol = {
  width: "50%",
  float: "left",
  flex: "1"
}

var linkContainer = {
  marginLeft: "5%",
  marginTop: "3%",
  marginBottom: "1%",
  position: "relative",
}

class Work extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(findWorkById(this.props.params.linkId))
  }

  handleChange(state) {
    this.setState(state)
  }

// logging props////////////
  logProps() {
    console.log(this.props)
  }
////////////////////////////

  render() {
    this.logProps()
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div style={wrapper}>
          <div style={leftCol}>
            {this.props.state.appStarter.project ?
              <div>
                <Header headerText={this.props.state.appStarter.project.headerText}/>
                <HeaderImage imageSrc={this.props.state.appStarter.project.projectImgs.imageSrc}/>
                <div style={linkContainer}>
                  {this.props.state.appStarter.project.projectLinks.map((item, i) =>
                    <Link key={i} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} />
                  )}
                </div>
                <HRule />
                <BodyCopyContainer bodyCopyContainerData={this.props.state.appStarter.project.projectBody} />
              </div>
              : <p></p>
            }

            {this.props.state.appStarter.contactLinks ?
                <ContactLinks ContactLinkData={this.props.state.appStarter.contactLinks}/>
              : <p></p>
            }
          </div>
          <div style={rightCol}>
            {this.props.state.appStarter.menu ?
                <Menu MenuBtnData={this.props.state.appStarter.menu}/>
              : <p></p>
            }
          </div>
      </div>
    )
  }
}

Work.propTypes = {
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

export default connect(mapStateToProps)(Work)
