import Button from "./Button";
import EmotionItem from "./EmotionItem";
import './Editor.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

//날짜를 문자열로 리턴하는 함수
const getStringDate = (targetDate)=>{
  //yyyy-mm-dd
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth()+1;
  let date = targetDate.getDate();
  //10, 11, 01
  if(month < 10) month =`0${month}`;
  if(date < 10) date =`0${date}`;
  return `${year}-${month}-${date}`
}

const Editor = ({initData,onSubmit})=>{
  const nav =useNavigate();
  const [input, setInput] = useState(() => {
    // 1. initData가 있으면 그 데이터를 초기값으로 사용
    if (initData) {
      return {
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      };
    }
    // 2. 없으면 기본값 사용
    return {
      createdDate: new Date(),
      emotionId: 3,
      content: "",
    };
  });
  
  const onChangeInput = e=>{
    let name = e.target.name;
    let value = e.target.value;
    if(name === 'createdDate') {
      value = new Date(value).getTime();
    }
    setInput({...input, [name] : value});
  }

  return (<>
    <div className="Editor"> 
      <section className="date_section"> 
        <h4>오늘의 날짜</h4> 
        <input type="date" name="createdDate" onChange={onChangeInput} value={getStringDate(input.createdDate)}/> 
      </section> 
      <section className="emotion_section"> 
        <h4>오늘의 감정</h4> 
        <div className="emotion_list_wrapper">
          {emotionList.map(item=>{
            return <EmotionItem key={item.emotionId} onClick={()=>{onChangeInput({target:{name: "emotionId", value: item.emotionId }})}} 
            {...item} isSelected={item.emotionId === input.emotionId}/>
          })}
        </div>
      </section> 
      <section className="content_section"> 
        <h4>오늘의 일기</h4> 
        <textarea placeholder="오늘은 어땠나요?" name='content' value={input.content} onChange={onChangeInput} /> 
      </section> 
      <section className="button_section"> 
        <Button text={"취소하기"} type={"NEGATIVE"} onClick={()=>nav(-1)}/> 
        <Button text={"작성완료"} type={"POSITIVE"} onClick={e=>onSubmit(input)} /> 
      </section></div> 
      </>
  ); 
};

export default Editor;
