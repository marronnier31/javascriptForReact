import { useState } from "react";
import Student from "./Student";
import '../css/Student.css'

const List = ({stus,onUpdate,onDelete})=>{
  const [search, setSearch] = useState('');
   const getFilterData = ()=>{
    if(search === ''){
      return stus;
    }
    return stus.filter(student=>{
      return student.name.toLowerCase().includes(search.toLowerCase())
    })
  }
  return <>
   <h4>학생 목록👩‍🎓</h4> 
       <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색어를 입력하세요" /> 
       <div className="StudentTitle">
    <div className="id">번호</div> 
      <div className="name">이름</div> 
      <div className="kor">국어점수</div> 
      <div className="eng">영어점수</div> 
      <div className="math">수학점수</div> 
      <div className="sum">총점</div> 
      <div className="avg">평균</div> 
      <div className="date">날짜</div> 
      <div className="btn_area"></div>
  </div>
      <div> 
        {getFilterData().map((student)=>{ 
          return <Student key={student.id} {...student} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </div> 
  </>
}

export default List;
