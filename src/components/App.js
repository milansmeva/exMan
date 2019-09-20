import React, { useReducer, useState } from 'react';

import { mainReducer, initial_state } from './mainReducer'



function App() {

  const [{ expense, credit, total }, dispatch] = useReducer(mainReducer, initial_state)
  const [amount, setAmount] = useState(0);

  let makeEntry = (amount, t) => {

    let type = t == 'E' ? "ADD_EXPENCE" : "ADD_CREDIT"

    dispatch({
      type,
      payload: {
        id: new Date().getTime(),
        amount: Number(amount)
      }
    })

    setAmount(0)
  }



  return (
    <div className="App">
      <div className="container">
        <h1 class="is-size-1">ExMan : Total {total}</h1>
        <hr />
        <div className="field">
          <div className="control">
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="input is-large" type="text" placeholder="Add Value" />
          </div>
        </div>
        <div className="columns">
          <button className="column button is-medium is-success is-fullwidth" onClick={() => makeEntry(amount, 'C')}>Credit</button>
          <button className="column button is-medium is-danger is-fullwidth" onClick={() => makeEntry(amount, 'E')}>Debit</button>
        </div>

        <hr />
        <div className="columns">
          <div className="column">
            <h2 className="is-size-3">Debits</h2>
            <ul>
              {expense.map(d => <li key={d.id}>{d.amount}</li>)}
            </ul>
          </div>
          <div className="column">
            <h2 className="is-size-3">Credits</h2>
            <ul>
              {credit.map(d => <li key={d.id}>{d.amount}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
