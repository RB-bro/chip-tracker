
import React, {PureComponent} from "react"
import {div, h, button, row, input} from '../helpers'

export class Admin extends PureComponent ::
    constructor(props) ::
      super(props)
      this.state = {store:this.props.store}


    render() ::
      const {timeslots} = this.state.store.viewObj
      const times = timeslots.map @ (item, idx) => div @ {key:idx}, `::  type ${item.timeSlotType}`
      return div @ {className:"container"},  @[]
          row @ @[]
            div @ {className:"eight columns"}, "TIMESLOTS:" 
        , row @ @[]
            div @ {className:"eight columns"}, times
             

