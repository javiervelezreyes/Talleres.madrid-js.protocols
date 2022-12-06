interface Vehicle {
  start ()
  stop  ()
  check ()
}


let vx = new Car
let vy = new Truck
let vz = new Car
let wshop = new WShop (vx, vy, vz)

wshop.work ()
