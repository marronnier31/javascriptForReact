import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import './Editor.css'

const Editor=({initData, onSubmit})=>{
    const nav = useNavigate();
    const [input, setInput] = useState(()=>{
        if(initData) return {...initData, regDate: new Date(initData.regDate).getTime() }
        return {title:"", writer:"", content:"", regDate: new Date().getTime() }
    });
    const onChangeInput = e=>{
        let name= e.target.name;
        let value = e.target.value;
        setInput({...input, [name] : value})
    }
    return <>
    <div className="Editor">
    <div className="title">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" value={input.title} onChange={onChangeInput}/>
    </div>
    <div className="writer">
        <label htmlFor="writer">작성자</label>
        <input type="text" name="writer" id="writer" value={input.writer} onChange={onChangeInput}/>
    </div>
    <div className="content">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" cols="30" rows="10" value={input.content} onChange={onChangeInput}></textarea>
    </div>
    <div className="button_area">
        <Button type={"BLUE"} text={"완료"} onClick={()=>onSubmit(input)}/>
        <Button type={"RED"} text={"취소"} onClick={()=>nav(-1)}/>
    </div>
    </div>
    </>
}

export default Editor;