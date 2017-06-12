import React, {PureComponent} from 'react'
import {input, div} from '../helpers'

export const NavigationBar = props => ::

  const _locations = ["home", "input_time", "counter"]

  function navButton() ::
    return (loc) => 
      input @: type:"button"
        , className: "button-secondary nav-bar-btn"
        , value:loc
        , onClick:() => props.tip.navigate @ loc

  return div @ {className:"nav-bar"}, _locations.map @ navButton()
