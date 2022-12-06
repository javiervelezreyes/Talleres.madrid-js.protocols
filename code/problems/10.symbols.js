const PRIVATE = Symbol ('Private')

function Create (x, y) {
  
}

function Private (e) {
  
}

let A = Create (1, 2)
let B = Create (1, 2)

console.log (
  A.x, A.y,
  B.x, B.y,
  A.fx (), A.fy (),
  B.fx (), B.fy ()
)

let PA = Private (A)
let PB = Private (B)

PA.x = 3, PA.y = 4
PB.x = 3, PB.y = 4

console.log (
  A.x, A.y,
  B.x, B.y,
  A.fx (), A.fy (),
  B.fx (), B.fy ()
)
