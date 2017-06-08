"use strict"
import React, {Component} from "react"
import {div, h, button} from 'react-hyperscript-helpers'

const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children

const column = (children) => 
  typeof children == 'string' 
    ?  div @ {className:"u-max-width three columns"}, [children]
    :  div @ {className:"u-max-width three columns"}, children

export class ViewPort extends Component ::
  constructor (props) ::
    super(props)

  render() ::
    let component = this.props.component
      , properties = {store:this.props.store}
    return div @ {className:"row"}, [h(component, properties)]


export class CountersView extends Component ::
  constructor(props) ::
    super(props)
    this.state = {store:this.props.store}

  reduceTotals(iterable, initial) ::
    return Array.from(iterable)
      .reduce @ _sumByKey, initial

    function _sumByKey(prevObj, nextObj) ::
      const res = {}
      const defaultZero = (num) => Number(num || 0)
      for const key in initial ::
        res[key] = defaultZero(prevObj[key]) + defaultZero(nextObj[key])
      return res

    
      
  render() ::
    return div @ {className:"container"}, this.state.store.location




export class HomeView extends Component ::
    constructor(props) ::
      super(props)
      this.store = this.props.store


    render() ::
      return div @ {className:"container"},  @[]
          row @ @[]
            div @ {className:"four columns"}, "this" 

        , row @ @[]
            div @ {className:"four columns"}, "is a"

        , row @ @[]
            div @ {className:"four columns"} , button @ "clickme", {className:"button-primary"}
            

        , row @ @[]
            div @ {className:"eight columns"}, "page"
             

