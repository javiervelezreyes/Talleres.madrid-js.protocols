interface Vehicle {
  start ()
  stop  ()
  check ()
}

class Car implements Vehicle {
  construtor () {}
  check () {
    console.log ('Checking car...')
    console.log ('done')
  }
}

class Truck implements Vehicle {
  construtor () {}
  check () {
    console.log ('Checking truck...')
    console.log ('done')
  }
}

class WShop {
  constructor (...vehicles: Vehicle[]) {
    this.vehicles = vehicles
  }
  work () {
    for (let vehicle of this.vehicles) {
      vehicle.check ()
    }
  }
}

let vx = new Car
let vy = new Truck
let vz = new Car
let wshop = new WShop (vx, vy, vz)

wshop.work ()
