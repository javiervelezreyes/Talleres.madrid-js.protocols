const SX = Symbol ()
const SY = Symbol ()

function Create (x, y) {
  return {
    x, y,
    [SX] () { return x },
    [SY] () { return y }
  }
}

let A = Create (1, 2)
let B = Create (3, 4)

console.log (
  A.SX, A.SY,
  A.SX, A.SY,
  A[SX](), A[SY](),
  B[SX](), B[SY](),
)
