let xs = [1, 2, 3]
let ys = [1, 2, 3, 4, 5]

for (let x of xs) console.log (x)
for (let y of ys) console.log (y)

let I  = Symbol.iterator
let IX = xs[I] ()
let IY = ys[I] ()

console.log (I, IX, IY)

console.log (
  IX.next (),
  IX.next (),
  IX.next ()
)

console.log (
  IY.next (),
  IY.next (),
  IY.next (),
  IY.next (),
  IY.next ()
)
