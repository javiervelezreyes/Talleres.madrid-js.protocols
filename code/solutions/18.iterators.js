let xs = [1, 2, 3]
let ys = [1, 2, 3, 4, 5]

function F () {
  let data = ['a', 'b', 'c']
  let pos  = 0
  let max  = data.length - 1

  function next () {
    return {
      value : data[pos],
      done  : pos++ > max
    }
  }
  return { next }
}

function G () {
  let data = 1
  let pos  = 0
  let max  = 10

  function next () {
    return {
      value : (pos < max) ? data++ : undefined,
      done  : pos++ > max - 1
    }
  }
  return { next }
}

let I = Symbol.iterator
xs[I] = F
ys[I] = G

for (let x of xs) console.log (x)
for (let y of ys) console.log (y)
