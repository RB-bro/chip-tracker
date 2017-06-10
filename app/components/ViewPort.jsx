"use strict"
import React, {Component} from "react"
import {div, h} from '../helpers'


export class ViewPort extends Component ::
  constructor (props) ::
    super(props)

  render() ::
    let component = this.props.component
      , properties = {store:this.props.store}
    return div @ {className:"row viewport"}, [h(component, properties)]
