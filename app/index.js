import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, ViewPort, Timeslot, Admin} from './components'

import {AppStore} from './model'


const {div, h, row, input} = require @ './helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'

const appStore = new AppStore().init()
console.log @: appStore

class Application extends PureComponent ::
  constructor (props) ::
    super(props)
    this.state = {store:appStore}

  componentWillMount() ::
    appStore.on @ "update", viewUpdate => ::
      console.log @: viewUpdate
      this.setState @: store:viewUpdate
      this.appStoreLog = [].concat @ this.appStoreLog || [], [viewUpdate]

    window.timetravel = storeView => ::
      if undefined === storeView ::
        return this.appStoreLog
      if 'number' === typeof storeView ::
        let idx = storeView
        storeView = this.appStoreLog[idx]
        this.appStoreLog = this.appStoreLog.slice(0, idx)

      return storeView.restoreToState @ storeView

    
  pages = 
    @{} home: Admin
      , input_time: Timeslot

  getViewForLocation () ::
    return this.pages[this.state.store.location || "home"]

  navButtons() ::
    return @[] 
        input @: type:"button"
              , className: "button-secondary"
              , value:"home"
              , onClick:() => this.state.store.navigate("home")

        , input @: type:"button"
              , className: "button-secondary"
              , value:"input_time"
              , onClick:() => this.state.store.navigate("input_time")

  viewPort = () => ::
    return h @ ViewPort, {component:this.getViewForLocation(), store:this.state.store}

  render() ::
    const header = row @ [ h(Header) ]
    const navbar = row @ this.navButtons()
    const footer = row @ [ h(Footer) ]
    const body = this.viewPort()

    
    return div @ {className:"container"}, @[]
        header
      , navbar 
      , body
      , footer




ReactDOM.render @ h(Application), document.getElementById @ "app"
