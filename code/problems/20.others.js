!function InstanceOf () {

  const INSTANCE = Symbol.hasInstance

  let even = x => x%2 == 0
  let odd  = x => x%2 == 1


  class Evens { static [INSTANCE](xs) { return xs.every (even) } }
  class Odds  { static [INSTANCE](xs) { return xs.every (odd)  } }

  console.log([1, 3, 5] instanceof Evens)
  console.log([2, 4, 6] instanceof Evens)
  console.log([1, 3, 5] instanceof Odds)
  console.log([2, 4, 6] instanceof Odds)

}()

!function Spread () {

  const SPREAD = Symbol.isConcatSpreadable

  let xs = [1, 2, 3]
  let ys = [4, 5, 6]
  let zs = [7, 8, 9]

  ys[SPREAD] = true
  zs[SPREAD] = false

  console.log (xs)
  console.log (xs.concat (ys))
  console.log (xs.concat (zs))

}()

!function Match () {

  const MATCH = Symbol.match

  let RX = /RX/
  let RY = /RY/

  RX[MATCH] = false // Si true: Error!
  RY[MATCH] = false // Si true: Error!

  console.log ('/RX/'.startsWith (RX))
  console.log ('/RY/'.startsWith (RX))
  console.log ('/RX/'.startsWith (RY))
  console.log ('/RY/'.startsWith (RY))

}()

!function Replace () {

  const REPLACE = Symbol.replace

  let double = x => x + x
  let triple = x => x + x + x

  function Double () { return { [REPLACE]: double } }
  function Triple () { return { [REPLACE]: triple } }

  let RD = Double ()
  let RT = Triple ()

  console.log ('Hello'.replace (RD))
  console.log ('Hello'.replace (RT))

}()

!function Search () {

  const SEARCH = Symbol.search

  let begin = x => y => y.indexOf (x)
  let end   = x => y => y.length - y.indexOf (x)
  let has   = x => y => y.indexOf (x) >= 0

  function Begin (x) { return { [SEARCH]: begin (x) } }
  function End   (x) { return { [SEARCH]: end   (x) } }
  function Has   (x) { return { [SEARCH]: has   (x) } }

  let SB = Begin ('World')
  let SE = End   ('World')
  let SH = Has   ('World')

  console.log ('Hello World'.search (SB))
  console.log ('Hello World'.search (SE))
  console.log ('Hello World'.search (SH))

}()

!function Split () {

  const SPLIT = Symbol.split

  let kebab = x => y => y.replaceAll (x, '-')
  let snake = x => y => y.replaceAll (x, '_')
  let chain = x => y => y.replaceAll (x, '.')

  function Kebab (x) { return { [SPLIT]: kebab (x) } }
  function Snake (x) { return { [SPLIT]: snake (x) } }
  function Chain (x) { return { [SPLIT]: chain (x) } }

  let SK = Kebab (' ')
  let SS = Snake (' ')
  let SC = Chain (' ')

  console.log ('Hello World'.split (SK))
  console.log ('Hello World'.split (SS))
  console.log ('Hello World'.split (SC))

}()

!function Primitive () {

  const PRIMITIVE = Symbol.toPrimitive

  function toInt (x) { return this.age }
  function User  (x) { return { ...x, [PRIMITIVE]: toInt } }

  let u1 = User ({ name: 'Peter', age: 25 })
  let u2 = User ({ name: 'Elsa',  age: 27 })

  console.log (u1 + u2)
  console.log (u1 - u2)
  console.log (u2 - u1)

}()
