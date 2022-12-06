function Car () {
  function start () { console.log ('Car started') }
  function stop  () { console.log ('Car stopped') }
  function check () {
    console.log ('Checking car...')
    this.start ()
    this.stop  ()
    console.log ('done')
  }

  return {
    start,
    stop,
    check
  }
}

function Truck () {
  function start () { console.log ('Truck started') }
  function stop  () { console.log ('Truck stopped') }
  function check () {
    console.log ('Checking truck...')
    this.start ()
    this.stop  ()
    console.log ('done')
  }

  return {
    start,
    stop,
    check
  }
}

function WShop (...vehicles) {
  function work () {
    for (let vehicle of vehicles) {
      vehicle.check ()
    }
  }
  return { work }
}

let vx = Car   ()
let vy = Truck ()
let vz = Car   ()
let wshop = WShop (vx, vy, vz)

wshop.work ()
