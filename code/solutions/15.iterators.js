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

!function TrialA () {
  let fn = F ()
  let gn = G ()

  for (let n of fn) console.log (n) // Error!
  for (let n of gn) console.log (n) // Error!
}

!function TrialB () {
  let I = Symbol.iterator
  let IF = { [I] : F }
  let IG = { [I] : G }

  for (let n of IF) console.log (n) // Ok
  for (let n of IG) console.log (n) // OK
}()

