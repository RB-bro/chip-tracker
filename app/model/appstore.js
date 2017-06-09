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

export class _AppStore extends EventEmitter ::
  setLocation(opts) ::
    this.location = opts.navTo
    this.update @ this


  update(obj) ::
    this.emit @ "update", obj

  navigate(loc) ::
    this.emit @ "navigate", {navTo:loc}

  init() ::
    this.on @ "navigate", this.setLocation
    return this
