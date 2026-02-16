import Button from "./Button";
import Header from "./Header";
import Editor from "./Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";

const New = () =>{
  const {onCreate} = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  //버튼전송기능(onCreate)
  const onSubmit = input => {
    onCreate(input.createdDate.getTime(),input.emotionId, input.content);
    //뒤로가기방지
    nav('/',{replace:true});
  }

 return <>
 <Header title={"새 일기 쓰기"} leftChild={<Button text={"< 뒤로가기"} onClick={e=>nav(-1)}/>} />
  <Editor onSubmit={onSubmit}/>
 </> 
}

export default New;
