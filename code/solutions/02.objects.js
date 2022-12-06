interface Vehicle {
  start ()
  stop  ()
  check ()
}

class Car implements Vehicle {
  construtor () {}
  start () { console.log ('Car started') }
  stop  () { console.log ('Car stopped') }
  check () {
    console.log ('Checking car...')
    this.start ()
    this.stop  ()
    console.log ('done')
  }
}

class Truck implements Vehicle {
  construtor () {}
  start () { console.log ('Truck started') }
  stop  () { console.log ('Truck stopped') }
  check () {
    console.log ('Checking truck...')
    this.start ()
    this.stop  ()
    console.log ('done')
  }
}

class WShop {
  private vehicles: Vehicle[]
  
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
