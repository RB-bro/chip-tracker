
import React, {PureComponent} from "react"
import {div, row} from '../helpers'

export class Timeslot extends PureComponent ::
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
    return div @ {className:"container"}, @[]
        div @ {className:"three columns"}, "this is"
     ,  div @ {className:"three columns"}, "the"
     ,  div @ {className:"three columns"}, "timeslot"
     ,  div @ {className:"three columns"}, "pane"
