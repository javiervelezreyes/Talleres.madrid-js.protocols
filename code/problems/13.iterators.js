let F = function * () {

}

let G = function * () {

}

let fn = F ()
let gn = G ()

for (let n of fn) console.log (n)
for (let n of gn) console.log (n)
