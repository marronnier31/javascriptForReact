import { useContext, useState } from "react";
import { BoardStateContext } from "../App";
import { useNavigate } from "react-router-dom";
import Button from './Button'
import BoardItem from "./BoardItem";
import './List.css'

const List = ()=>{
  const data = useContext(BoardStateContext);
  const nav = useNavigate(); 
  const [sortType, setSortType] = useState("latest"); 
 
const getSortedData = () => { 
  //새로운 정렬을 리턴한다. 
    return data.toSorted((a, b) => sortType === "oldest"?  Number(a.regDate) - Number(b.regDate) : Number(b.regDate)- Number(a.regDate)); 
  }; 
 
  const sortedData = ()=>data.toSorted((a, b) => sortType === "oldest"?  Number(a.regDate) - Number(b.regDate) : Number(b.regDate)- Number(a.regDate));
  return <>
     <div className="List"> 
      <div className="menu_bar"> 
        <select value={sortType} onChange={e=>setSortType(e.target.value)}> 
          <option value={"latest"}>최신순</option> 
          <option value={"oldest"}>오래된 순</option> 
        </select> 
        <Button text={"글쓰기"} type={"BLUE"}  onClick={() => nav("/new")}/> 
      </div> 
      <div className="BoardItem">
        <div className="no">번호</div>
        <div className="writer">작성자</div>
        <div className="title">제목</div>
        <div className="regDate">작성일</div>
      </div>
      <div className="list_wrapper"> 
         {sortedData().map(item=> <BoardItem key={item.no} {...item} /> )} 
      </div> 
    </div>
  </>
}
export default List;