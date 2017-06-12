import React from 'react'

import {h, div, h1, button, input} from 'react-hyperscript-helpers'

class Clock extends React.Component ::
  constructor(props) ::
    super(props)
    this.state = {date:new Date()}
  tick() ::
    this.setState @ {date:new Date()}
  componentDidMount() ::
    this.timerID = setInterval @
        () => this.tick()
      , 1000
  componentWillUnmount() ::
    clearInterval(this.timerID)
  render() ::
    return div @ `${this.state.date.toLocaleTimeString()}`

export class Header extends React.Component ::
  constructor(props) ::
    super(props)

  render() ::
    return div @ {className:"row text-center"}, 
      @[] h1 @ "TimeKeeper"
        , h @ Clock

