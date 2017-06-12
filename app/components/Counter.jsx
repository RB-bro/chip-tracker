
import React, {PureComponent} from "react"
import {div, h, h1, button, row, input} from '../helpers'

export const CounterView = props => ::

  function renderStateChangeButton() ::
    const tip = props.tip
    return (item, idx) => input @ @{}
          type:"button"
        , onClick:() => tip.add(item.num)
        , className: "button-secondary"
        , value: item.name 
        , key: idx+1

    
  const buttonData = @[] {name:"inc", num:1} , {name:"dec", num:-1}
  const buttons = buttonData.map @ renderStateChangeButton()
  const {count} = props.tip

  return div @ {className:"view-item"},  @[]
      row @ @[]
        h1 @ {className:"eight columns"}, `::CURRENT COUNT::[${count}]`
    , row @ @[] 
        buttons
