import { replace, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { BoardDispatchContext } from "../App";
import Editor from "./Editor";
import Header from "./Header";



const New = ()=>{
  const {onCreate} = useContext(BoardDispatchContext);
  const nav = useNavigate();

  const onSubmit = input=>{
    onCreate(input.title, input.writer, input.content, input.regDate);
    nav('/',{replace:true});
  }
  
  return <>
    <Header title={"새로운 게시글"}/>
    <Editor onSubmit={onSubmit}/>
  </>
}
export default New;