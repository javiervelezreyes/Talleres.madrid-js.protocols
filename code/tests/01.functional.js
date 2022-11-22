const DB = [
  { name: 'jhon',   gender: 'M', age: 18 },
  { name: 'Mary',   gender: 'F', age: 36 },
  { name: 'Peter',  gender: 'M', age: 12 },
  { name: 'Martha', gender: 'F', age: 41 },
  { name: 'Arthur', gender: 'M', age: 26 },
  { name: 'Esther', gender: 'F', age: 15 },
]

let pluck  = k => e => e[k]
let name   = pluck ('name')
let age    = pluck ('age')
let gender = pluck ('gender')
let adult  = e => age(e) > 18
let joung  = e => age(e) < 19
let man    = e => gender(e) == 'M'
let woman  = e => gender(e) == 'F'

console.log (
  DB
    .filter (man)
    .filter (adult)
    .map (name),

  DB
    .filter (woman)
    .filter (adult)
    .map (name),

  DB
    .filter (man)
    .filter (joung)
    .map (name),

  DB
    .filter (woman)
    .filter (joung)
    .map (name)
)
