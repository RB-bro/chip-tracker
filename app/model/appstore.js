import {BrandonsFunctionalStore} from './basestore'

export class AppStore extends BrandonsFunctionalStore ::

  setLocation(opts) ::
    return this.navStore.setLocation @ opts

  navigate(loc) ::
    return this.navStore.setLocation @ loc

  incCount(opts) ::
    return this.assignToTip @:
      count: this.tip.count + opts.count 

  add(num) ::
    this.incCount @ {count: num}

  submitTime(opts) ::
    return this.timeStore.submitTime(opts)
  get timeslots() ::
    return this.timeStore.timeslots

  restoreToState(viewObj) ::
    super.restoreToState(viewObj)
    const timeStore = viewObj.timeStore
    if null != timeStore ::
      timeStore.restoreToState(timeStore)



  static create() ::
    const timeStore = TimeStore.create()
        , navStore = NavStore.create()
    const root = super.create @:
      count: 0, timeStore, navStore

    timeStore.on @ 'update', timeStore => ::
      if timeStore !== root.timeStore ::
        root.assignToTip @: timeStore

    navStore.on @ 'update', navStore => ::
      if navStore !== root.navStore ::
        root.assignToTip @: navStore

    return root


export class NavStore extends BrandonsFunctionalStore ::
  navigate(loc) ::
    this.setLocation @ {navTo:loc}

  setLocation(opts) ::
    this.assignToTip @: location:opts.navTo

  static create() ::
    return super.create @: location: "home"

export class TimeStore extends BrandonsFunctionalStore ::
  submitTime(opts) ::
    const timeslots = this.tip.timeslots.concat @ [opts.submission]
    return this.assignToTip @: timeslots

  static create() ::
    return super.create @: timeslots: []

