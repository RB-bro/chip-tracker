global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")
const {EventEmitter} = require("events")

export class AppStore extends EventEmitter ::

  setLocation(opts) ::
    return this.tip = asViewObj @ this.tip, @{}
      location:opts.navTo

  incCount(opts) ::
    const count = this.tip.count 
    return this.tip = asViewObj @ this.tip, @{}
      count:count + opts.count 

  submitTime(opts) ::
    const timeslots = this.tip.timeslots
    return this.tip = asViewObj @ this.tip, @{}
      timeslots: [...timeslots, opts.submission]


  navigate(loc) ::
    this.setLocation @ {navTo:loc}

  add(num) ::
    this.incCount @ {count: num}

  restoreToState (viewObj) ::
    this.tip = viewObj

  set tip(aTip) ::
    const root = this._root_
    if root._tip === aTip :: return
    root._tip = aTip
    root.emit @ "update", aTip
    return aTip

  get tip() ::
    const root = this._root_
    return root._tip

  init() ::
    Object.defineProperty @ this, "_root_", {value:this}
    this.tip = asViewObj @ this, @{}
        count:0
      , location: "home"
      , timeslots: []

    return this.tip


function asViewObj(obj, ...args) ::
    const viewObj = Object.create @ obj._root_ || obj
    Object.assign @ viewObj, obj, ...args
    return Object.freeze @ viewObj



