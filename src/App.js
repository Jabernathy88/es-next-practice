import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // debug example
    const foo = { name: 'tom', age: 30, nervous: false }
    const bar = { name: 'dick', age: 40, nervous: false }
    const baz = { name: 'harry', age: 50, nervous: true }

    // old
    console.log(foo)
    console.log(bar)
    console.log(baz)

    // new: computed property names (these work in react components)
    console.log('%c Three guys', 'color: teal; font-weight: bold;')
    console.log({ foo, bar, baz })
    console.table([foo, bar, baz])

    console.time('looper')

    let i = 0;
    while (i < 1000000) { i++ }

    console.timeEnd('looper')

    const deleteMe = () => console.trace('bye bye database')
    deleteMe()

    const turtle = {
      name: 'Bob 🐢',
      legs: 4,
      shell: true,
      type: 'amphibious',
      meal: 10,
      diet: 'berries'
    }

    // old
    function feed(animal) {
      return `Feed ${animal.name} ${animal.meal} pounds of ${animal.diet}`;
    }
    // new
    function altFeed({ name, meal, diet }) {
      return `Feed ${name} ${meal} kilos of ${diet}`;
    }
    // or
    function alternateFeed(animal) {
      const { name, meal, diet } = animal
      return `Feed ${name} ${meal} KILOS of ${diet}`;
    }
    console.log(feed(turtle))
    console.log(altFeed(turtle))
    console.log(alternateFeed(turtle))

    // template literal
    const horse = {
      name: 'Topher 🐎',
      size: 'large',
      skills: ['jousting', 'racing'],
      age: 7
    }

    // old
    // not worth re-writing
    // new
    const {name, size, skills} = horse;
    const bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
    console.log(bio)

    function horseAge(str, age) {
      const ageStr = age > 5 ? 'old' : 'young';
      return `${str[0]}${ageStr} at ${age} years`;
    }
    const bio2 = horseAge`This horse is ${horse.age}`;
    console.log(bio2)

    // spread syntax
    const pikachu = { name: 'Pikachu' }
    const stats = { hp: 40, attack: 60, defense: 45 }
    console.log(pikachu)

    // old 
    pikachu['hp'] = stats.hp
    pikachu['attack'] = stats.attack
    pikachu['defense'] = stats.defense
    console.log(pikachu)
    // newish
    const lv10 = Object.assign(pikachu, stats)
    // or
    const lv11 = Object.assign(pikachu, { hp: 70 })
    console.log({ pikachu })
    // new
    const lv12 = { ...pikachu, ...stats }
    console.log({ pikachu })
    console.log({ lv12 })

    // spread arrays
    let pokemon = ['Arbok', 'Raichu'];
    console.log(pokemon)
    // old
    pokemon.push('Bulbasaur')
    pokemon.push('Metapod')
    console.log(pokemon)
    // new push
    pokemon = [...pokemon, 'Negasaur']
    console.log(pokemon)
    // new unshift
    pokemon = ['Alphamon', ...pokemon, 'Zetamon', ]
    console.log({ pokemon })

    // loops
    const orders = [500, 30, 99, 15, 223];
    // old
    let total = 0;
    const withTax = [];
    const highValue = [];
    const loopFunction = () => {
      let i =0
      for (i = 0; i < orders.length; i++) {
        // reduce
        total += orders[i];
        // map
        withTax.push(orders[i] * 1.1);
        // filter 
        if (orders[i] > 100) {
          highValue.push(orders[i])
        }
      }
    }
    loopFunction()
    console.log({orders}, {total}, {withTax}, {highValue})

    // new reduce
    const orders2 = [500, 30, 99, 15, 223];
    const total2 = orders2.reduce((acc, cur) => acc + cur)
    console.log({ total2 });
    // note: reduce did not mutate the original value
    console.log({ orders2 })

    // new map
    const withTax2 = orders2.map(v => v * 1.1);
    console.log({withTax2})

    // new filter
    const highValue2 = orders2.filter(v => v > 100);
    console.log({highValue2})
    console.log({ orders2 })

    // promises
    const random = () => {
      return Promise.resolve(Math.random())
    }

    const sumRondomNums = () => {
      let first;
      let second;
      let third;

      return random()
        .then(v => {
          first = v;
          return random();
        })
      .then(v => {
        second = v;
        return random();
      })
      .then(v => {
        third = v;
        return first + second + third;
      })
      .then(v => {
        console.log(`Result is: ${v}`)
      })
    }
    sumRondomNums()

    // // async await
    const sumRandomAsyncNums = async() => {
      const first = await random();
      const second = await random();
      const third = await random();
      console.log(`Async result is: ${first + second + third}`)
    }
    sumRandomAsyncNums()

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
