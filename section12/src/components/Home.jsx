import Button from "./Button";
import DiaryList from "./DiaryList";
import Header from "./Header";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () =>{
  //공유props가져오기
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date())
  //이전달, 다음달이벤트처리
  const onDecreaseMonth = e=>{
    setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1))
  }
  const onIncreaseMonth = e=>{
    setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))
  }
  //26년 2월에 해당되는 일기만 필터링한다.
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(),1,0,0,0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1,0,23,59,59).getTime();
  const monthlyData = state.filter(item=>item.createdDate >= beginTime && item.createdDate <= endTime)
  
 return <>
    <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
    leftChild={<Button text={"< 이전달"} type={"POSITIVE"}  onClick={onDecreaseMonth}/>}
    rightChild={<Button text={"다음달 >"} type={"NEGATIVE"}  onClick={onIncreaseMonth}/>}/>
    {/* <Button text={"저장하기"} type={"POSITIVE"} onClick={onClickButton}/>
    <Button text={"취소하기"} type={"NEGATIVE"} onClick={onClickButton}/>
    <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickButton}/> */}

    <DiaryList monthlyData={monthlyData}/>
 </> 
}

export default Home;