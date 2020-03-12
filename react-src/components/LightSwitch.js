import React, { Component } from 'react'
import lightswitchOn from '../images/lightswitch-on.jpg'
import lightswitchOff from '../images/lightswitch-off.jpg'

class LightSwitch extends Component {

  getLightState = () => (
    this.props.lightOn
    ? lightswitchOn
    : lightswitchOff
  )

  render() {
    return (
      <div
        className='lightswitch-div'
        onClick={this.props.triggerLight}
        onMouseOver={this.props.displayToolTip}
        onMouseOut={this.props.hideToolTip}
        style={{
          backgroundImage: 'url(' + this.getLightState() + ')'
        }}
        >
      </div>
    )
  }

}

export default LightSwitch
