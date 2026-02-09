import { useEffect, useRef, useState } from 'react'
import './App.css'
import Viewer from './components/Viewer';
import InputController from './components/InputController';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [count1, setCount1] = useState(0);
  const isMount = useRef(false);
  const countValue = useRef(0);
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
 const onClickBt =()=> {
  setCount1(count+1);
 }
 const onClickNumber =()=> {
  setNumber(number+1);
 }

useEffect(()=>{
  console.log(`countValue = ${countValue.current}`)
  countValue.current += 1;
  if(isMount.current === false){
    isMount.current = true;
  }else{
  console.log(`App update`)
  }
})
  return (
    <>
    <div className='App'>
      <div>
     <h1>계산기</h1>
     </div>
    <Viewer count={count}/>
    <InputController onClickButton={onClickButton}/>
    {count % 2 === 0?<Even/>:null}
    </div>
   <div>
    <button type="button" onClick={onClickBt}>버튼</button>
    <button type="button" onClick={onClickNumber}>버튼</button>
   </div>
    </>
  )
}

export default App
