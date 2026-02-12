import { useParams } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const Diary = () =>{
   const params = useParams(); 
   const onClickButton = e =>{
    alert(e.target.innerText);
  }
 return <>
 <Header title={"Header"} leftChild={<Button text={"LEFT"} type={"POSITIVE"}  onClick={onClickButton}/>} rightChild={<Button text={"RIGHT"} type={"NEGATIVE"}  onClick={onClickButton}/>}/>
  <h1> {params.id}번의 Diary</h1>
 </> 
}

export default Diary;
