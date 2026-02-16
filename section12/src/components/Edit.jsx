import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import Editor from "./Editor";
import { useContext, useEffect, useMemo, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () =>{
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const {onUpdate, onDelete} = useContext(DiaryDispatchContext);


  //Edit가 마운트 되는 순간 => params.id를 통해서 data에서 해당되는 항목을 찾고, currentDiaryItem에 저장
  // useState와 useEffect를 제거하고 useMemo로 대체
  const curDiaryItem = useMemo(() => {
    return data.find((item) => String(item.id) === String(params.id));
  }, [data, params.id]); // data나 id가 바뀔 때만 다시 계산


// 데이터가 로드될 때까지 렌더링 방어
if (!curDiaryItem) {
  return <div>데이터를 불러오는 중입니다...</div>;
}

//삭제하기
const onClickDelete =()=>{
  if(window.confirm('일기를 정말 삭제할까요?')){
    onDelete(Number(params.id));
    nav("/",{replace:true})
  }
}
//수정하기
const onSubmit =input=>{
  if(window.confirm("일기를 정말 수정할까요?")){
    onUpdate(Number(params.id),input.createdDate, input.emotionId, input.content);
    nav("/",{replace:true})
  }
}
 return <>
 <div className="">
  <Header title={"일기수정하기"} leftChild={<Button text={"< 뒤로가기"} onClick={()=>nav(-1)}/>} rightChild={<Button text={"삭제하기"} onClick={onClickDelete} type={"NEGATIVE"}/>}/>
  <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
 </div>
 </> 
}

export default Edit;
