import React, { Component } from 'react'
import roomOff from '../images/room-light-off.jpg'
import roomOn from '../images/room-light-on.jpg'

class Room extends Component {

  render() {
    return (
      <>
        <img
          draggable='false'
          src={
            this.props.lightOn == true
            ? roomOn
            : roomOff
          }
        />
      </>
    )
  }

}

export default Room
