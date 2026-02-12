import Button from "./Button";
import Header from "./Header";
const New = () =>{
   const onClickButton = e =>{
    alert(e.target.innerText);
  }
 return <>
 <Header title={"Header"} leftChild={<Button text={"LEFT"} type={"POSITIVE"}  onClick={onClickButton}/>} rightChild={<Button text={"RIGHT"} type={"NEGATIVE"}  onClick={onClickButton}/>}/>
  <h1> New</h1>
 </> 
}

export default New;
;