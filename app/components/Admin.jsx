
import React, {PureComponent} from "react"
import {div, h, button, row, input} from '../helpers'

export class Admin extends PureComponent ::
    constructor(props) ::
      super(props)
      this.state = {store:this.props.store}


    render() ::
      console.log @ this.state.store.viewObj
      return div @ {className:"container"},  @[]
          row @ @[]
              div @ {className:"two columns"}, "this" 
            , div @ {className:"two columns"}, "is"
            , div @ {className:"two columns"}, @[]
                input @ {type:"button", onClick:() => this.state.store.addOne(), className:"button-secondary", value:"inc"}
            , div @ {className:"two columns"}, `COUNT: ${this.state.store.count}`
            , div @ {className:"two columns"}, "page"
             

