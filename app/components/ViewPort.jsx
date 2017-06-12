"use strict"
import React, {Component} from "react"
import {div, h} from '../helpers'


export const ViewPort = props =>
  div @ {className:"row viewport"}, [h(props.component, {tip:props.tip})]
