import { useState } from "react";
const InputController = ({onClickButton}) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
   const onChangeNum = e=>{
    if(e.target.name === 'num1'){
     setNum1(e.target.value);
    }else {
      setNum2(e.target.value);
    }
  }
  const onClick = e => {
    onClickButton(num1, num2, e.target.value);
  }
  return<>
  <div className='InputController'>
      <label htmlFor="num1">숫자1</label>
      <input type="text" value={num1} name="num1" id="num1" onChange={onChangeNum}/><br /> 
      <label htmlFor="num2">숫자2</label>
      <input type="text" value={num2} name="num2" id="num2" onChange={onChangeNum}/><br /> 
      <button type="button" value={'+'} onClick={onClick}>+</button>
      <button type="button" value={'-'} onClick={onClick}>-</button>
      <button type="button" value={'*'} onClick={onClick}>*</button>
      <button type="button" value={'/'} onClick={onClick}>/</button>
      
    </div>
    </>
}
export default InputController;