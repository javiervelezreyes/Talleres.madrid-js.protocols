function F () {
  let data = [1, 2, 3]
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

let fn = F ()
let gn = G ()

console.log (
  fn.next (),
  fn.next (),
  fn.next ()
)

console.log (
  gn.next (),
  gn.next (),
  gn.next (),
  gn.next (),
  gn.next ()
)
