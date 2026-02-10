import { useRef, useState } from "react";
import '../css/Student.css'

const UpdateStu = ({id, name, onUpdate, setIsUpdate})=> {
   const [student, setStudent] = useState({kor : '', eng : '', math: ''});
       const inputRef = useRef();
       const onClickBt = e =>{
            if (student.kor === '' || student.eng === '' ||student.math === '') { 
                 inputRef.current.focus(); 
                 return; 
            } 
            onUpdate(id,student.kor, student.eng, student.math); 
            setIsUpdate(false);
            setStudent({kor: '', eng: '', math: '' }); 
       }
       const onChangeStu = e => {
            setStudent({
              ...student,
              [e.target.name]: e.target.value
          });
       }
       const onKeydown = (e) => { 
            if (e.keyCode === 13) { 
                 onClickBt(); 
            } 
       };
  return <>
  <div className="Update">
    <div className="id">{id}</div>
    <div className="name">{name}</div>
    <input className="korInput" ref={inputRef}  value={student.kor} type="text" name="kor" onChange={onChangeStu}/>
    <input value={student.eng} type="text" name="eng" onChange={onChangeStu}/>
    <input value={student.math} type="text" name="math" onKeyDown={onKeydown} onChange={onChangeStu} />
    <div className="sum"></div>
    <div className="avg"></div>
    <div className="date"></div>
    <div className="btn_area">
    <button onClick={onClickBt}>수정완료</button> 
    </div>
    </div>
  </>
}

export default UpdateStu;