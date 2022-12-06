let F = function * () {
  yield 1
  yield 2
  yield 3
}

let G = function * () {
  for (let i=1; i<=10; i++) {
    yield i
  }
}

let fn = F ()
let gn = G ()

console.log (
  fn.next (),
  fn.next (),
  fn.next (),
  fn.next (),
)

console.log (
  gn.next (),
  gn.next (),
  gn.next (),
  gn.next (),
  gn.next ()
)
