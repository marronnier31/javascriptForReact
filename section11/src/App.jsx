import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
 const [count, setCount] = useState(0);

 const onClickButton = (num1,num2,op)=>{
  switch (op) {
    case '+':
      setCount(num1 + num2);
      break;
    case '-':
      setCount(num1 - num2);
      break;
    case '*':
      setCount(num1 * num2);
      break;
    case '/':
      setCount(num1 / num2);
      break;
  }
 }
  return (
    <>
     <div className='App'>
      <h1>계산기</h1>
     </div>
    <Viewer count = {count}/>
    <Controller onClickButton = {onClickButton}/>
    </>
  )
}

export default App
