import React, { Component } from 'react'
import Room from './Room'
import LightSwitch from './LightSwitch'
import Light from './Light'
import Tooltip from './Tooltip'

class RoomContainer extends Component {

  state = {
    lightOn: false,
    showTooltip: false
  }

  onLightToggle = () => {
    this.setState({
      lightOn: !this.state.lightOn
    })
  }

  displayToolTip = () => {
    this.setState({
      showTooltip: true
    })
  }

  hideToolTip = () => {
    this.setState({
      showTooltip: false
    })
  }

  render() {
    return (
      <>
        <div
          className='room-container'>
          <div
          className='room-inner'
          >
          <Room
            lightOn={this.state.lightOn}
            />
          <LightSwitch
            lightOn={this.state.lightOn}
            triggerLight={this.onLightToggle}
            displayToolTip={this.displayToolTip}
            hideToolTip={this.hideToolTip}
            />
          <Light
            lightOn={this.state.lightOn}
            />
          {
            this.state.showTooltip
            ? <Tooltip/>
            : null
          }
          </div>
        </div>
      </>
    )
  }

}

export default RoomContainer
