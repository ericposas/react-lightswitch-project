import React, { Component } from 'react'
import lightTurnedOn from '../images/light-on.png'
import lightTurnedOff from '../images/light-off.png'

class Light extends Component {

  getLightState = () => (
    this.props.lightOn
    ? lightTurnedOn
    : lightTurnedOff
  )

  render() {
    return (
      <>
        <div
          className='light'
          style={{
            backgroundImage: 'url(' + this.getLightState() + ')'
          }}
          >
        </div>
      </>
    )
  }

}

export default Light
