import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {BoardDispatchContext, BoardStateContext} from '../App'
import Button from "./Button";

const Detail = ()=>{
  const data = useContext(BoardStateContext);
  const {onDelete} = useContext(BoardDispatchContext); 
  const params = useParams();
  const nav = useNavigate();
  const onClickDelete = ()=>{
    onDelete(Number(params.no));
    nav("/", { replace: true }); 
  }
  return <>
    <h1>{`${params.no}번의 게시글입니다`}</h1>
    <div className="detail">
      <div className="no">{data.no}</div>
      <div className="writer">{data.writer}</div>
      <div className="title">{data.title}</div>
      <div className="regDate">{data.regDate}</div>
      <div className="content">{data.content}</div>
      <div className="button_section"> 
        <Button onClick={()=>nav(`/edit/${params.no}`)} text={"수정하기"} type={'BLUE'}/> 
        <Button onClick={onClickDelete} text={"삭제하기"} type={'RED'}/> 
      </div>
    </div>
  </>
}
export default Detail;