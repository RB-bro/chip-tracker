global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")
const {EventEmitter} = require("events")

export class AppStore extends ObjectFunctional ::
  asAction = this.init
  init() ::
    this.locations = ['home', 'input_time']
    this.setLocation @ this.locations[0]
    return this

  setLocation(loc) ::
    this.location = loc
    

  asAction = this.restoreToState
  restoreToState(view) ::
    Object.assign @ this, view
    this.ts_restored = Date.now()
    return this
    
  asAction = this.move
  move(location) ::
    -1 !== this.locations.indexOf(location)
      ? this.setLocation @ this.locations[this.locations.indexOf(location)]
      : this.setLocation @ this.locations[0]
    return this


const create = obj => Object.create @ obj
export class _AppStore extends EventEmitter ::

  setLocation(opts) ::
    this.viewObj.location = opts.navTo
    this.update @ this.viewObj

  incCount(opts) ::
    this.viewObj.count = this.viewObj.count + opts.count
    this.update @ this.viewObj


  update(obj) ::
    this.emit @ "update", Object.freeze @ create @ obj

  navigate(loc) ::
    this.emit @ "navigate", {navTo:loc}

  add(num) ::
    this.emit @ "inc_count", {count: num}

  addOne() ::
    this.add @ 1

  getViewObj(obj) ::
    const viewObj = Object.create @ obj
    viewObj.count = 0
    viewObj.location = "home"
    return viewObj

  init() ::
    this.on @ "navigate", this.setLocation
    this.on @ "inc_count", this.incCount
    this.viewObj = this.getViewObj @ this
    return Object.freeze @ this
