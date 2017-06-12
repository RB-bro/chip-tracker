"use strict"
import React, {Component} from "react"
import {div, h} from '../helpers'


export class ViewPort extends Component ::
  constructor (props) ::
    super(props)
    this.state = {store:this.props.store}
 
  render() ::
    let component = this.props.component
      , properties = {store:this.state.store}
    return div @ {className:"row viewport"}, [h(component, properties)]
