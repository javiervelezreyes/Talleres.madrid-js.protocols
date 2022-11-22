function Car () {
  function start () { console.log ('Car started') }
  function stop  () { console.log ('Car stopped') }

  return { start, stop }
}

function Truck () {
  function start () { console.log ('Truck started') }
  function stop  () { console.log ('Truck stopped') }

  return { start, stop }
}

function WShop (...vehicles) {
  function work () {
    for (let vehicle of vehicles) {
      vehicle.check ()
    }
  }
  return { work }
}

function Mixin (fn) {
  return function (e) {
    let key   = fn.name
    let value = fn.bind (e)
    let proto = Object.getPrototypeOf (e)
    let mixin = { [key] : value }
    Object.setPrototypeOf (mixin, proto)
    Object.setPrototypeOf (e, mixin)
  }
}

function check () {
  console.log (`Checking...`)
  this.start ()
  this.stop  ()
  console.log ('done')
}

let Checkable = Mixin (check)
let vx = Car   ()
let vy = Truck ()
let vz = Car   ()

Checkable (vx)
Checkable (vy)
Checkable (vz)

let wshop = WShop (vx, vy, vz)

wshop.work ()
