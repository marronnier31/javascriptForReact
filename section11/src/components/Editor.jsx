import { useRef, useState } from "react";

const Editor = ({onCreate})=> {
     const [student, setStudent] = useState({name: '', kor : '', eng : '', math: ''});
     const inputRef = useRef();
     const onClickBt = e =>{
          if (student.name === '' || student.kor === '' || student.eng === '' ||student.math === '') { 
               inputRef.current.focus(); 
               return; 
          } 
          onCreate(student.name, student.kor, student.eng, student.math); 
          setStudent({ name: '', kor: '', eng: '', math: '' }); 
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
     
     return<>
          <div className="Editor">
               <label htmlFor="name">이름 : </label>
               <input type="text" ref={inputRef}  name="name" id="name" value={student.name} onChange={onChangeStu}/> <br />
               <label htmlFor="kor">국어 : </label>
               <input type="text" name="kor" id="kor" value={student.kor} onChange={onChangeStu}/><br />
               <label htmlFor="eng">영어 : </label>
               <input type="text" name="eng" id="eng" value={student.eng} onChange={onChangeStu}/><br />
               <label htmlFor="math">수학 : </label>
               <input type="text" onKeyDown={onKeydown} onChange={onChangeStu}
                name="math" id="math" value={student.math} /><br />
               <button onClick={onClickBt}>추가</button>
          </div>
     </>
}

export default Editor;