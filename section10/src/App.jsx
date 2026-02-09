import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import InputController from './components/InputController';

function App() {
  const [count, setCount] = useState(0);
  
  const onClickButton = (num1, num2, op)=>{
    switch(op){
      case '+':
        setCount(parseInt(num1) + parseInt(num2));
        break;
      case '-':
        setCount(parseInt(num1) - parseInt(num2));
        break;
      case '*':
        setCount(parseInt(num1) * parseInt(num2));
        break;
      case '/':
        setCount(parseInt(num1) / parseInt(num2));
        break;
    }
  }
 

  return (
    <>
    <div className='App'>
      <div>
     <h1>계산기</h1>
     </div>
    <Viewer count={count}/>
    <InputController onClickButton={onClickButton}/>
    </div>
   
    </>
  )
}

export default App
