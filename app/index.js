import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, ViewPort, Timeslot, Admin, NavigationBar, CounterView} from './components'

import {timeTravelingMachine} from './model'
import {AppStore} from './model'


const {div, h, row, input} = require @ './helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'


class Application extends PureComponent ::
  pages = 
    @{} home: Admin
      , input_time: Timeslot
      , counter: CounterView

  getViewForLocation () ::
    return this.pages[this.props.tip.location || "home"]


  viewPort = () => ::
    return h @ ViewPort, {component:this.getViewForLocation(), tip:this.props.tip}

  render() ::
    const header = row @ [ h(Header) ]
    const navbar = row @ [ h(NavigationBar, {tip:this.props.tip}) ]
    const footer = row @ [ h(Footer) ]
    const body = this.viewPort()

    return div @ {className:"container"}, @[]
        header
      , navbar 
      , body
      , footer


::
  const rootElem = document.getElementById @ "app"
  function renderRoot(tip) ::
    const root = h @ Application, {tip}
    ReactDOM.render @ root, rootElem

  const appStore = AppStore.create()
  console.log @: appStore
  window.app_timetravel = timeTravelingMachine(appStore)
  window.timelog_timetravel = timeTravelingMachine(appStore.timeStore)

  appStore.on @ "update", renderRoot
  renderRoot(appStore.tip)

