import React from 'react'
import ReactDOM from 'react-dom'

import {Header, Footer, ViewPort, HomeView, CountersView} from './components'

import {AppStore} from './model/appstore.js'

import {div, h, input} from 'react-hyperscript-helpers'

// CSS IMPORTS

import styles from './styles/main.styl'
import skeleton from './styles/skeleton.css'
import normalize from './styles/normalize.css'

const appStore = new AppStore().init()

const row = (children) =>
  typeof children == 'string' 
    ?  div @ {className:"row"}, [children]
    :  div @ {className:"row"}, children

class Application extends React.Component ::
  constructor (props) ::
    super(props)
    this.state = {place:'home', store:appStore}

  componentWillMount() ::
    appStore.subscribe @ viewUpdate => ::
      console.log @: viewUpdate
      this.setState @: store:viewUpdate, place:viewUpdate.location
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
    @{} home: () => HomeView
      , input_time: () => CountersView

  showLoc () ::
    return this.pages[this.state.place]()

  navButtons() ::
    return @[] 
        input @: type:"button"
              , className: "button-secondary"
              , value:"home"
              , onClick:() => this.state.store.move("home")

        , input @: type:"button"
              , className: "button-secondary"
              , value:"input_time"
              , onClick:() => this.state.store.move("input_time")

  viewPort = (props) => ::
    return h @ ViewPort, props

  render() ::
    const header = row @ [ h(Header) ]
    const navbar = row @ this.navButtons()
    const footer = row @ [ h(Footer) ]
    const body = this.viewPort @ {component:this.showLoc(), store:this.state.store}
    console.log @: body

    
    return div @ {className:"container"}, @[]
        header
      , navbar 
      , body
      , footer



ReactDOM.render @ h(Application), document.getElementById @ "app"
