function F () {


function G () {

}

let fn = F ()
let gn = G ()

for (let n of fn) console.log (n) // Error!
for (let n of gn) console.log (n) // Error!
