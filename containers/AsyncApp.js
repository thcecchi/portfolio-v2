import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { openApp } from '../actions/actions'
import Header from '../components/Header'
import Loading from '../components/Loading'
import Subhead from '../components/Subhead'
import HRule from '../components/HRule'
import BodyCopy from '../components/BodyCopy'
import ProjectContainer from './ProjectContainer'
import Menu from './Menu'
import ContactLinks from './ContactLinks'
import BodyCopyContainer from './BodyCopyContainer'

class AsyncApp extends Component {

  getStyles() {
     return {
       wrapper: {
         width: "100%",
         float: "left",
         display: "flex",
         position: "relative"
       },
       leftCol: {
         width: "50%",
         float: "left",
         flex: "1",
         "@media (max-width : 460px)": {
            flex: "3"
          }
       },
       rightCol: {
         width: "50%",
         float: "left",
         flex: "1"
       }
     }
   }
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(openApp())
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
    const styles = this.getStyles();
    const { state, isFetching, dispatch, getState } = this.props
    return (
      <div style={styles.wrapper}>
          <div style={styles.leftCol}>
            <Header headerText={this.props.state.appStarter.headerText}/>

            {this.props.state.appStarter.subHeaders ?
              <Subhead subHeaders={this.props.state.appStarter.subHeaders}/>
              : <p></p>
            }

            {this.props.state.appStarter.projects ?
                <ProjectContainer ProjectData={this.props.state.appStarter.projects}/>
              : <p></p>
            }

            <HRule />

            {this.props.state.appStarter.bodyCopy ?
                <BodyCopyContainer bodyCopyContainerData={this.props.state.appStarter.bodyCopy} />
              : <p></p>
            }

            {this.props.state.appStarter.contactLinks ?
                <ContactLinks ContactLinkData={this.props.state.appStarter.contactLinks}/>
              : <p></p>
            }
          </div>
          <div style={styles.rightCol}>
            {this.props.state.appStarter.menu ?
                <Menu MenuBtnData={this.props.state.appStarter.menu}/>
              : <p></p>
            }
          </div>
      </div>
    )
  }
}

AsyncApp.propTypes = {
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

AsyncApp = Radium(AsyncApp)
export default connect(mapStateToProps)(AsyncApp);
