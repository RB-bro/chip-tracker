//global.Observable = require("zen-observable")
//const {ObjectFunctional} = require("object-functional")
const {EventEmitter} = require("events")

export class BrandonsFunctionalStore extends EventEmitter ::
  static create(...args) ::
    const root = new this()
    Object.defineProperty @ root, "_root_", {value: root}
    root.tip = asViewObj @ root, ...args
    Object.preventExtensions(root)
    return root.tip

  set tip(aTip) ::
    const root = this._root_
    if root._tip_ === aTip :: return
    root._tip_ = aTip
    root.emit @ "update", aTip
    return aTip

  get tip() ::
    const root = this._root_
    return root._tip_

  restoreToState(viewObj) ::
    this.tip = viewObj

  assignToTip(...args) ::
    return this.tip = asViewObj @ this.tip, ...args

export function asViewObj(obj, ...args) ::
    const viewObj = Object.create @ obj._root_ || obj
    Object.assign @ viewObj, obj, ...args
    return Object.freeze @ viewObj


export function timeTravelingMachine(store) ::
  let storeLog = []
  store.on @ "update", view => ::
    storeLog = [].concat @ storeLog, [view]

  return timetravel

  function timetravel(indexOrStoreView) ::
    if undefined === indexOrStoreView ::
      return storeLog.slice()
    if 'number' === typeof indexOrStoreView ::
      let idx = indexOrStoreView
      indexOrStoreView = storeLog[idx]
      storeLog = storeLog.slice(0, idx)

    return store.restoreToState @ indexOrStoreView
