const SX = Symbol ()
const SY = Symbol ()

function Create (x, y) {
  return {
    x, y,
    [SX] () { return this.x },
    [SY] () { return this.y }
  }
}

let A = Create (1, 2)
let B = Create (3, 4)

A['SX'] = 5
console.log (
  A.SX, A.SY,
  B.SX, B.SY,
  A[SX](), A[SY](),
  B[SX](), B[SY](),
)
