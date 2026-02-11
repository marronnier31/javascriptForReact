import { useReducer, useState } from "react";

function reducer(content, action) {
  switch (action.type) {
    case "PLUS":
      
      return content + parseInt(action.data);
    case "MINUS":
      
      return content - Number(action.data);
  
    default:
      return content;
  }
}

const Exam = ()=> {
  const [content, dispatch] =useReducer(reducer, 0);
  const [count, setCount] = useState(0);
  return<>
  <div>
    <h1>{content}</h1>
    <button value={2} onClick={e=>dispatch({type:"PLUS", data: e.target.value})}>+</button>
    <button value={3} onClick={e=>dispatch({type:"MINUS", data: e.target.value})}>-</button>
  </div>
  </>
}

export default Exam;