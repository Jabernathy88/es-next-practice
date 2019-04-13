// debug example
const foo   = { name: 'tom', age: 30, nervous: false }
const bar   = { name: 'dick', age: 40, nervous: false  }
const baz   = { name: 'harry', age: 50, nervous: true  }

// old
console.log(foo)
console.log(bar)
console.log(baz)

// new: computed property names (these work in react components)
console.log('%c Three guys', 'color: aqua; font-weight: bold;')
console.log({ foo, bar, baz })
console.table([foo, bar, baz])

console.timer('looper')

let i = 0; 
while (i < 1000000) { i++ }

console.timeEnd('looper')