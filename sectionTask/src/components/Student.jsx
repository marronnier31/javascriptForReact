import { useRef, useState } from 'react';
import '../css/Student.css'
import UpdateStu from './UpdateStu';

const Student = ({id,name, kor, eng, math, sum, avg, date,onUpdate,onDelete})=>{
  const [isUpdate, setIsUpdate] = useState(false);
  
  return<>
  {isUpdate? <UpdateStu id ={id} name = {name} onUpdate={onUpdate} setIsUpdate={setIsUpdate} /> :
   <div className="Student"> 
      <div className="id">{id}</div> 
      <div className="name">{name}</div> 
      <div className="kor">{kor}</div> 
      <div className="eng">{eng}</div> 
      <div className="math">{math}</div> 
      <div className="sum">{sum}</div> 
      <div className="avg">{avg.toFixed(1)}</div> 
      <div className="date">{new Date(date).toLocaleDateString()}</div> 
      <div className="btn_area">
      <button onClick={()=>setIsUpdate(true)}>수정</button> 
      <button onClick={()=>onDelete(id)}>삭제</button> 
      </div>
    </div>}
  </>
}

export default Student;
