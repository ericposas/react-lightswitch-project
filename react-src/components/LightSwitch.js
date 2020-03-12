import React, { Component } from 'react'

class LightSwitch extends Component {

  render() {
    return (
      <div
        className='lightswitch-div'
        onClick={this.props.triggerLight}
        onMouseOver={this.props.displayToolTip}
        onMouseOut={this.props.hideToolTip}
        >
      </div>
    )
  }

}

export default LightSwitch
