import { useState } from "react";

const Controller = ({onClickButton}) => {
  const [num1, setNumber1] = useState("");
  const [num2, setNumber2] = useState("");
  const onChangeNum = e=> {
    if(e.target.name === 'num1'){
      setNumber1(parseInt(e.target.value));
    }else {
      setNumber2(parseInt(e.target.value));
    }
  }
  const onButton = e=>{
    onClickButton(num1, num2, e.target.value)
  }
  return <>
    <div>
      <label htmlFor="num1">숫자1</label>
      <input type="text" name="num1" id="num1" value={num1} onChange={onChangeNum}/> <br />
      <label htmlFor="num2">숫자2</label>
      <input type="text" name="num2" id="num2" value={num2} onChange={onChangeNum}/><br />
      <button type="button" value={'+'} onClick={onButton}>+</button>
      <button type="button" value={'-'} onClick={onButton}>-</button>
      <button type="button" value={'*'} onClick={onButton}>*</button>
      <button type="button" value={'/'} onClick={onButton}>/</button>
    </div>
  </>
}

export default Controller;