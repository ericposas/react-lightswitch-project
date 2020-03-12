import React, { Component } from 'react'
import roomOff from '../images/room-off.jpg'
import roomOn from '../images/room-on.jpg'
import LightSwitch from './LightSwitch'
import Tooltip from './Tooltip'

class Room extends Component {

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
    console.log(true)
    this.setState({
      showTooltip: true
    })
  }

  hideToolTip = () => {
    console.log(false)
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
          <img
            draggable='false'
            src={
              this.state.lightOn == true
              ? roomOn
              : roomOff
            }
          />
          <LightSwitch
            triggerLight={this.onLightToggle}
            displayToolTip={this.displayToolTip}
            hideToolTip={this.hideToolTip}
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

export default Room
