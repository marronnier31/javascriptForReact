import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {BoardDispatchContext, BoardStateContext} from '../App'
import Button from "./Button";
import './Detail.css'

const getStringDate = (targetDate)=>{
  //yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate(); 

  //10, 11, 01
  if(month < 10) month = `0${month}`
  if(date < 10) date = `0${date}`
  return `${year}-${month}-${date}`
}

const Detail = ()=>{
  const data = useContext(BoardStateContext);
  const {onDelete} = useContext(BoardDispatchContext); 
  const params = useParams();
  const nav = useNavigate();
   const curBoardItem = useMemo(() => {
      return data.find((item) => String(item.no) === String(params.no));
    }, [data, params.no]); // data나 no가 바뀔 때만 다시 계산

  // 데이터가 로드될 때까지 렌더링 방어
  if (!curBoardItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }
  const date = getStringDate(new Date(curBoardItem.regDate))
  //삭제하기
const onClickDelete =()=>{
  if(window.confirm('이 글을 정말로 삭제하시겠습니까?')){
    onDelete(Number(params.no));
    nav("/",{replace:true})
  }
}
  return <>
    <div className="detail">
      <div className="section_row">
        <div className="no">{`번호 ${curBoardItem.no}`}</div>
        <div className="writer">{`작성자  ${curBoardItem.writer}`}</div>
        <div className="regDate">{`작성일  ${date}`}</div>
      </div>
      <div className="title">{curBoardItem.title}</div>
      <div className="content">{curBoardItem.content}</div>
      <div className="button_section"> 
        <Button onClick={()=>nav(-1)} text={'뒤로가기'}/>
        <Button onClick={()=>nav(`/edit/${params.no}`)} text={"수정하기"} type={'BLUE'}/> 
        <Button onClick={onClickDelete} text={"삭제하기"} type={'RED'}/> 
      </div>
    </div>
  </>
}
export default Detail;