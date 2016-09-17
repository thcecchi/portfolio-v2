import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'
import Radium from 'radium'

export default class Header extends Component {
  getStyles() {

   return {
     headerContainer: {
       marginLeft: "5%",
       marginTop: "3%"
     },
     headerText: {
       color: '#ff6a40',
       fontFamily: 'Roboto Mono, monospace',
       letterSpacing: "1.75",
       fontWeight: "400",
       fontSize: "28px",
       zIndex: "2",
       cursor: "pointer"
     },
     dots: {
      position: "absolute",
      zIndex: "-2",
      top: "35px",
      opacity: ".6"
     }
   };
  }

  goToHome() {
    browserHistory.push('/');
  }

  render() {
    const { value, options } = this.props
    const styles = this.getStyles();

    return (
      <div onClick={this.goToHome.bind(this)} style={styles.headerContainer}>
        <h1 key="header-text" key="header-text" style={styles.headerText}>{this.props.headerText}</h1>
        <svg width="297px" style={styles.dots} height="21px" viewBox="0 0 297 21" version="1.1">
            <title>dot-bar</title>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="iPad-Pro-Landscape" transform="translate(-388.000000, -145.000000)" fill="#2C82C9">
                    <g id="Group" transform="translate(388.000000, 145.000000)">
                        <circle id="Oval-199" cx="295.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-198" cx="289.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-197" cx="283.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-196" cx="277.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-195" cx="271.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-194" cx="265.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-193" cx="259.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-192" cx="253.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-191" cx="247.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-190" cx="241.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-189" cx="235.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-188" cx="229.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-187" cx="223.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-186" cx="217.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-185" cx="211.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-184" cx="205.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-183" cx="199.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-182" cx="193.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-181" cx="187.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-180" cx="181.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-179" cx="175.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-178" cx="169.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-177" cx="163.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-176" cx="157.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-175" cx="151.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-174" cx="145.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-173" cx="139.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-172" cx="133.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-171" cx="127.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-170" cx="121.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-169" cx="115.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-168" cx="109.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-167" cx="103.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-166" cx="97.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-165" cx="91.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-164" cx="85.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-163" cx="79.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-162" cx="73.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-161" cx="67.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-160" cx="61.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-159" cx="55.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-158" cx="49.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-157" cx="43.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-156" cx="37.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-155" cx="31.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-154" cx="25.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-153" cx="19.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-152" cx="13.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-151" cx="7.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-150" cx="1.5" cy="19.5" r="1.5"></circle>
                        <circle id="Oval-149" cx="295.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-148" cx="289.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-147" cx="283.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-146" cx="277.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-145" cx="271.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-144" cx="265.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-143" cx="259.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-142" cx="253.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-141" cx="247.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-140" cx="241.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-139" cx="235.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-138" cx="229.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-137" cx="223.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-136" cx="217.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-135" cx="211.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-134" cx="205.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-133" cx="199.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-132" cx="193.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-131" cx="187.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-130" cx="181.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-129" cx="175.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-128" cx="169.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-127" cx="163.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-126" cx="157.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-125" cx="151.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-124" cx="145.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-123" cx="139.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-122" cx="133.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-121" cx="127.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-120" cx="121.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-119" cx="115.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-118" cx="109.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-117" cx="103.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-116" cx="97.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-115" cx="91.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-114" cx="85.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-113" cx="79.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-112" cx="73.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-111" cx="67.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-110" cx="61.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-109" cx="55.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-108" cx="49.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-107" cx="43.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-106" cx="37.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-105" cx="31.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-104" cx="25.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-103" cx="19.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-102" cx="13.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-101" cx="7.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-100" cx="1.5" cy="13.5" r="1.5"></circle>
                        <circle id="Oval-99" cx="295.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-98" cx="289.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-97" cx="283.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-96" cx="277.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-95" cx="271.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-94" cx="265.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-93" cx="259.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-92" cx="253.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-91" cx="247.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-90" cx="241.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-89" cx="235.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-88" cx="229.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-87" cx="223.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-86" cx="217.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-85" cx="211.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-84" cx="205.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-83" cx="199.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-82" cx="193.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-81" cx="187.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-80" cx="181.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-79" cx="175.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-78" cx="169.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-77" cx="163.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-76" cx="157.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-75" cx="151.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-74" cx="145.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-73" cx="139.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-72" cx="133.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-71" cx="127.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-70" cx="121.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-69" cx="115.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-68" cx="109.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-67" cx="103.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-66" cx="97.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-65" cx="91.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-64" cx="85.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-63" cx="79.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-62" cx="73.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-61" cx="67.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-60" cx="61.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-59" cx="55.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-58" cx="49.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-57" cx="43.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-56" cx="37.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-55" cx="31.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-54" cx="25.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-53" cx="19.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-52" cx="13.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-51" cx="7.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-50" cx="1.5" cy="7.5" r="1.5"></circle>
                        <circle id="Oval-49" cx="295.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-48" cx="289.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-47" cx="283.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-46" cx="277.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-45" cx="271.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-44" cx="265.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-43" cx="259.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-42" cx="253.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-41" cx="247.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-40" cx="241.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-39" cx="235.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-38" cx="229.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-37" cx="223.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-36" cx="217.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-35" cx="211.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-34" cx="205.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-33" cx="199.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-32" cx="193.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-31" cx="187.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-30" cx="181.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-29" cx="175.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-28" cx="169.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-27" cx="163.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-26" cx="157.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-25" cx="151.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-24" cx="145.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-23" cx="139.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-22" cx="133.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-21" cx="127.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-20" cx="121.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-19" cx="115.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-18" cx="109.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-17" cx="103.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-16" cx="97.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-15" cx="91.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-14" cx="85.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-13" cx="79.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-12" cx="73.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-11" cx="67.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-10" cx="61.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-9" cx="55.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-8" cx="49.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-7" cx="43.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-6" cx="37.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-5" cx="31.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-4" cx="25.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-3" cx="19.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-2" cx="13.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-1-Copy" cx="7.5" cy="1.5" r="1.5"></circle>
                        <circle id="Oval-1" cx="1.5" cy="1.5" r="1.5"></circle>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    )
  }
}

Header.propTypes = {

}

module.exports = Radium(Header)
