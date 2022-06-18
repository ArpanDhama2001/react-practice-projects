import React, { useState } from 'react'

import './App.css';

import Birthday from './components/Birthday'

import data from './data'

const App = () => {
    const [people, setPeople] = useState(data);
  return (
    <div className='container'>
        <h1>{people.length} birthdays today</h1>
        <Birthday people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
    </div>
  )
}

export default App