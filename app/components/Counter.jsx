
import React, {PureComponent} from "react"
import {div, h, h1, button, row, input} from '../helpers'

export class CounterView extends PureComponent ::
  constructor(props) ::
    super(props)

  renderStateChangeButton() ::
    return (item, idx) => input @ @{}
          type:"button"
        , onClick:() => item.store.add(item.num)
        , className: "button-secondary"
        , value: item.name 
        , key: idx+1

  render() ::
    /* for some reason I have to pass the store whole I think */
    
    const buttons = [{name:"inc", store:this.props.store, num:1}
                  ,  {name:"dec", store:this.props.store, num:-1}]
                  .map @ this.renderStateChangeButton()
    /*
    const buttons = [{name:"inc", onClick:this.props.store.addOne}
                  ,  {name:"dec", onClick:this.props.store.deleteOne}]
                  .map @ this.renderStateChangeButton()
   */

    const {count} = this.props.store.viewObj
    return div @ {className:"view-item"},  @[]
        row @ @[]
          h1 @ {className:"eight columns"}, `::CURRENT COUNT::[${count}]`
      , row @ @[] 
          buttons
