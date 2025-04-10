import React, { useState } from 'react';
import data from './data';
import List from './List';
import { useFormState } from 'react-dom';

function App() {
  const [people, setPeople] = useState(data)
  let birthdays = (people.length === 1) ? "birthday": "birthdays";
  return <main>
    <section className='container'>
      <h3>{people.length} {birthdays} today</h3>
      <List people={people} />
      <button onClick={()=> setPeople([])}>Clear all</button>
      <button onClick={()=> setPeople(data)}>Reset</button>
    </section>
  </main>
}

export default App;
