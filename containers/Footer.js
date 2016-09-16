import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Radium, {StyleRoot} from 'radium'
import { openApp } from '../actions/actions'
import Link from '../components/Link'
import HRule from '../components/HRule'

class Footer extends Component {

  getStyles() {
     return {
       footerStyle: {
        paddingTop: "5%",
        paddingBottom:"1%"
       },
       iconContainerStyle: {
         "@media (max-width : 768px)": {
           position: "relative",
           display: "flex",
           justifyContent: "space-around"
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

  render() {
    const { state, isFetching, dispatch, getState } = this.props
    const styles = this.getStyles();
    return (
      <div style={styles.footerStyle}>
        <HRule />
        <StyleRoot>
          <div style={styles.iconContainerStyle}>
            {this.props.FooterData.footerLinks.map((item, i) =>
              <Link key={i} icon={true} inlineContainer={true} linkText={item.linkData.linkText} linkUrl={item.linkData.linkUrl} iconName={item.linkData.iconName} iconSize={item.linkData.iconSize} />
            )}
          </div>
        </StyleRoot>
      </div>
    )
  }
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const { headerText, subHeaders, projects, menu } = state

  return {
    state
  }
}

Footer = Radium(Footer)
export default connect(mapStateToProps)(Footer);
