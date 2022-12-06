let A = { x:1, y: 2 }
let B = { x:3, y: 4 }
let C = { x:5, y: 6 }

function * F () { for (let k of Object.keys (this)) yield k }
function * G () { for (let k of Object.keys (this)) yield this[k] }
function * H () { for (let k of Object.keys (this)) yield [k, this[k]] }

let I = Symbol.iterator
A[I] = F
B[I] = G
C[I] = H

for (let e of A) console.log (e)
for (let e of B) console.log (e)
for (let e of C) console.log (e)
