let xs = [1, 2, 3]
let ys = [1, 2, 3, 4, 5]

function * F () {
  yield 1
  yield 2
  yield 3
}

function * G () {
  yield 1
  yield 1
  yield 1
}

let I = Symbol.iterator
xs[I] = F
ys[I] = G

for (let x of xs) console.log (x)
for (let y of ys) console.log (y)
