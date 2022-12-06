function Car () {
  function check () {
    console.log ('Checking car...')
    console.log ('done')
  }

  return { check }
}

function Truck () {
  function check () {
    console.log ('Checking truck...')
    console.log ('done')
  }

  return { check }
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
