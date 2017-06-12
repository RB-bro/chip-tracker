global.Observable = require("zen-observable")
const {ObjectFunctional} = require("object-functional")
const {EventEmitter} = require("events")

export class AppStore extends EventEmitter ::

  setLocation(opts) ::
    this.viewObj.location = opts.navTo
    this.update @ this.viewObj

  incCount(opts) ::
    const {count} = this.viewObj
    this.viewObj.count = count + opts.count
    this.update @ this.viewObj

  submitTime(opts) ::
    const {timeslots} = this.viewObj
    this.viewObj.timeslots = [...timeslots, opts.submission]
    this.update @ this.viewObj


  update(obj) ::
    this.emit @ "update", Object.freeze @ Object.create @ obj

  navigate(loc) ::
    this.emit @ "navigate", {navTo:loc}

  submit_time(obj) ::
    this.emit @ "submit_time", {submission:obj}

  add(num) ::
    this.emit @ "inc_count", {count: num}

  addOne() ::
    this.add @ 1

  subtractOne() ::
    this.add @ -1

  getViewObj(obj) ::
    const viewObj = Object.create @ obj
    viewObj.count = 0
    viewObj.location = "home"
    viewObj.timeslots = []
    return viewObj

  init() ::
    this.on @ "navigate", this.setLocation
    this.on @ "inc_count", this.incCount
    this.on @ "submit_time", this.submitTime

    this.viewObj = this.getViewObj @ this
    return Object.freeze @ this
