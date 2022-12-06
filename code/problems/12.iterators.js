let F = function * () {

}

let G = function * () {

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
