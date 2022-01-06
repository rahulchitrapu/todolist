// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[value,setvalue]=useState("")
  const [todoList,settodoList]=useState([])
  function addFunc(){
    // const term=setvalue("")
    // console.log(value)
    const arr=[...todoList,value]
    settodoList(arr)

  }
  function onchangeFunc(e){
    setvalue(e.target.value)
  }
  function todoItems(){
   return todoList.map((item)=>
      <li key={item}>{item}</li>
    )
  }
  
  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" placeholder='enter your todo event' onChange={onchangeFunc}  value={value} />
      <button onClick={addFunc}>ADD</button>
      <ul>
        {todoItems()}
        
      </ul>
    </div>
  );
}

export default App;
