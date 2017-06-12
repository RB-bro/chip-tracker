
import React, {PureComponent} from "react"
import {div, row, input, h} from '../helpers'


const TIMESLOTS = @[]
    {name:"production", color:"blue"}
  , {name:"management", color:"black"}
  , {name:"meetings", color:"green"}
  , {name:"tooling", color:"red"}
  , {name:"learning", color:"white"}

export class Timeslot extends PureComponent ::
  constructor(props) ::
    super(props)

  renderTimeButton() ::
    return (item, idx) => input @ @{}
          type:"button"
        , onClick:() => this.props.tip.submitTime @ 
          {submission:{user:"fake", ts:new Date(), timeSlotType:item.name}}
        , className:"button-secondary"
        , value:item.name 
        , key:idx+1


  render() ::
    const timeinputs = TIMESLOTS.map @ this.renderTimeButton()
    return div @ {className:"view-item"}, @[]
        div @ {className:"row"}, @[] timeinputs




 //ask shane about how to use Date.now to get current time
