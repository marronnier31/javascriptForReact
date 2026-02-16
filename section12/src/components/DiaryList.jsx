import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList=({monthlyData})=>{
  //정렬순서상태변화
  const [sortType, setSortType] = useState('latest');
  //정렬처리
  const getSortedMonthlyData =()=> monthlyData.toSorted((a,b)=> sortType === "oldest" ? a.createdDate - b.createdDate : b.createdDate - a.createdDate)
  //페이지라우팅
  const nav = useNavigate();

  const sortedMonthlyData = getSortedMonthlyData();
  return <>
    <div className="DiaryList">
    <div className="menu_bar">
      <select value={sortType} onChange={e =>setSortType(e.target.value)}>
        <option value={"latest"}>LATEST</option>
        <option value={"oldest"}>OLDEST</option>
      </select>
      <Button text={"새일기쓰기"} type={"POSITIVE"} onClick={()=>nav("/new")}/>
    </div>
    <div className="list_wrapper">
      {sortedMonthlyData.map(item=><DiaryItem key={item.id} {...item}/>)}
    </div>
    </div>
  </>
}
export default DiaryList;