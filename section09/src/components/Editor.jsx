import '../css/Editor.css'
import { useRef, useState } from 'react';

const Editor =({onCreate})=>{
  const [content, setContent] = useState('');
  const inputRef = useRef();
  const onClickBt = ()=>{
    if(content === ''){
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };
  const onKeyDown = e=>{
   if(e.keyCode === 13){
    onClickBt();
   }
  }
  return <>
   <div className="Editor"> 
      <input value={content} ref={inputRef} onChange={e => setContent(e.target.value)} 
        onKeyDown={onKeyDown} placeholder="새로운 Todo..." /> 
      <button onClick={onClickBt}>추가</button> 
    </div>
  </>
}

export default Editor;