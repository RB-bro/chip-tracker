
import React, {PureComponent} from "react"
import {div, h, button, row, input, ul, li, h1} from '../helpers'

export const Admin = props => ::
  const {timeslots} = props.tip
  const times = timeslots.map @ (item, idx) => li @ {key:idx}, `type : ${item.timeSlotType} user: ${item.user} time: ${item.ts.toLocaleString()}`
  return div @ {className:"view-item"},  @[]
      row @ @[]
        h1 @ {className:"eight columns"}, "TIMESLOTS:" 
    , row @ @[]
        ul @ {className:"eight columns"}, times
             
