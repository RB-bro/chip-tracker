import React, {PureComponent} from 'react'
import {input, div} from '../helpers'

export class NavigationBar extends PureComponent ::
  constructor(props) ::
    super(props)

  _locations = ["home", "input_time", "counter"]

  navButton() ::
    return (loc) => 
      input @: type:"button"
        , className: "button-secondary nav-bar-btn"
        , value:loc
        , onClick:() => this.props.tip.navigate(loc)

  render() ::
    return div @ {className:"nav-bar"}, this._locations.map @ this.navButton()
