import {BrandonsFunctionalStore} from './basestore'

export class AppStore extends BrandonsFunctionalStore ::

  setLocation(opts) ::
    return this.assignToTip @:
      location:opts.navTo

  incCount(opts) ::
    return this.assignToTip @:
      count: this.tip.count + opts.count 

  submitTime(opts) ::
    return this.timeStore.submitTime(opts)
  get timeslots() ::
    return this.timeStore.timeslots

  restoreToState(viewObj) ::
    super.restoreToState(viewObj)
    const timeStore = viewObj.timeStore
    if null != timeStore ::
      timeStore.restoreToState(timeStore)

  navigate(loc) ::
    this.setLocation @ {navTo:loc}

  add(num) ::
    this.incCount @ {count: num}

  static create() ::
    const timeStore = TimeStore.create()
    const root = super.create @:
      count: 0, location: "home", timeStore

    timeStore.on @ 'update', timeStore => ::
      if timeStore !== root.timeStore ::
        root.assignToTip @: timeStore
    return root


export class TimeStore extends BrandonsFunctionalStore ::
  submitTime(opts) ::
    const timeslots = this.tip.timeslots.concat @ [opts.submission]
    return this.assignToTip @: timeslots

  static create() ::
    return super.create @: timeslots: []

