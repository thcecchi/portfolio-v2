import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import { openApp, findWorkById } from '../actions/actions'
import Header from '../components/Header'
import HRule from '../components/HRule'
import Shade from '../components/Shade'
import Subhead from '../components/Subhead'
import HeaderImage from '../components/HeaderImage'
import Link from '../components/Link'
import Menu from './Menu'
import ContactLinks from './ContactLinks'
import BodyCopyContainer from './BodyCopyContainer'
import Footer from './Footer'

var customLinkContainerStyle = {
  marginLeft: "4%",
  marginTop: "2%",
  marginBottom: "4%",
  position: "relative",
}

var customBodyCopyStyle = {
  marginTop: "4%",
  marginBottom: "1%"
}

class Work extends Component {

  getStyles() {
     return {
       wrapper: {
         width: "100%",
         float: "left",
         display: "flex",
         position: "relative",
         "@media (max-width : 460px)": {
           flexDirection: "column"
          }
       },
       leftCol: {
         flex: "1",
         "@media (max-width : 460px)": {
           order: "2",
           position: "relative",
           width: "100vw",
           height: "95vh"
          }
       },
       rightCol: {
         flex: "1",
         zIndex: "10",
         "@media (max-width : 460px)": {
            order: "1",
            position: "relative",
            width: "100vw",
            height: "5vh",
            paddingBottom: "5%"
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
    const styles = this.getStyles();
    return (
      <div style={styles.wrapper}>
          {this.props.state.appStarter.menu ?
              <Shade shadeState={this.props.state.appStarter.menu.menuOpen} />
            : <p></p>
          }
          <div style={styles.leftCol}>
            {this.props.state.appStarter.project ?
              <div>
                <Header headerText={this.props.state.appStarter.project.headerText}/>
                <HeaderImage imageSrc={this.props.state.appStarter.project.projectImgs.imageSrc}/>
                <div style={customBodyCopyStyle}>
                  <BodyCopyContainer bodyCopyContainerData={this.props.state.appStarter.project.created} />
                </div>

                {this.props.state.appStarter.project.projectLinks.map((item, i) =>
                  <div style={customLinkContainerStyle}>
                    <Link key={i} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} />
                  </div>
                )}

                <HRule />
                <BodyCopyContainer bodyCopyContainerData={this.props.state.appStarter.project.projectBody} />
              </div>
              : <p></p>
            }

            {this.props.state.appStarter.footer ?
                <Footer FooterData={this.props.state.appStarter.footer}/>
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

Work = Radium(Work)
export default connect(mapStateToProps)(Work);
