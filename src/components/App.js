import React, { useReducer,useState } from 'react';

import { mainReducer, initial_state } from './mainReducer'



function App() {

  const [{expense,credit,total}, dispatch] = useReducer(mainReducer, initial_state)
  const [amount,setAmount] = useState(0); 

  let expnseAction = ()=>{
    return {
      type:"ADD_EXPENCE",
      payload:{
        amount,
        id:new Date().getTime()
      }
    }
  }

  let makeEntry = (amount,t)=>{

    let type = t=='E'?"ADD_EXPENCE":"ADD_CREDIT"

    dispatch({
      type,
      payload:{
        id:new Date().getTime(),
        amount:Number(amount)
      }
    })
  }

  

  return (
    <div className="App">
      <h1>ExMan : total {total}</h1>
      <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <button onClick={()=>makeEntry(amount,'C')}>Credit</button>
      <button onClick={()=>makeEntry(amount,'E')}>Debit</button>
      <hr />
      <h2>Debits</h2>
      <ul>
       {expense.map(d=><li key={d.id}>{d.amount}</li>)}
      </ul>

        <hr/>
        <h2>Credits</h2>
        <ul>
        {credit.map(d=><li key={d.id}>{d.amount}</li>)}
        </ul>
    
    </div>
  );
}

export default App;
