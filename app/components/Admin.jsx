
import React, {PureComponent} from "react"
import {div, h, button, row} from '../helpers'

export class Admin extends PureComponent ::
    constructor(props) ::
      super(props)
      this.store = this.props.store


    render() ::
      return div @ {className:"container"},  @[]
          row @ @[]
              div @ {className:"two columns"}, "this" 
            , div @ {className:"two columns"}, "is"
            , div @ {className:"two columns"}, "the"
            , div @ {className:"two columns"}, "admin"
            , div @ {className:"two columns"}, "page"
             

