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

for (let n of fn) console.log (n)
for (let n of gn) console.log (n)
