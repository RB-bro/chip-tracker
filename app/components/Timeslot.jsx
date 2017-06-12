
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
    this.state = {store:this.props.store}

  renderTimeButton() ::
    return (item, idx) => input @ @{}
          type:"button"
        , onClick:() => this.state.store.submitTime @ 
          {user:"fake", ts:Date.now(), timeSlotType:item.name}
        , className:"button-secondary"
        , value:item.name 
        , key:idx+1

  render() ::
    const timeinputs = TIMESLOTS.map @ this.renderTimeButton()
    return div @ {className:"container"}, @[]
        div @ {className:"three columns"}, "this is"
     ,  div @ {className:"three columns"}, "the"
     ,  div @ {className:"three columns"}, "timeslot"
     ,  div @ {className:"three columns"}, "pane"
     ,  div @ {className:"row"}, @[] timeinputs
