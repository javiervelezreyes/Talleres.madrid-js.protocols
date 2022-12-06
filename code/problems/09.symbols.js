const INSPECT = Symbol ('Inspect')

function Create (x, y) {
  return {
    x, y,
    fx () { return this.x },
    fy () { return this.y }
  }
}

function Inspect (e) {
 let meta = {}
 e[INSPECT] = e[INSPECT] || {
  get (k)    { return meta[k] },
  set (k, v) { meta[k] = v    }
 }
 return e[INSPECT]
}

let A = Create (1, 2)
let B = Create (3, 4)

let IA = Inspect (A)
let IB = Inspect (B)

IA.set ('level', 1)
IA.set ('mode',  2)

IB.set ('level', 3)
IB.set ('mode',  4)

console.log (
  Object.keys (A),
  Object.keys (B),
  IA.get ('level'),
  IB.get ('level'),
  IA.get ('mode'),
  IB.get ('mode'),
)
