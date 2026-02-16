import { useNavigate } from "react-router-dom";
import './List.css'

const BoardItem = ({no,title,writer,regDate})=>{
  const nav = useNavigate(); 
  return <>
    <div className="BoardItem" onClick={()=>nav(`/detail/${no}`)}>
      <div className="no">{no}</div>
      <div className="writer">{writer}</div>
      <div className="title">{title}</div>
      <div className="regDate">{new Date(regDate).toLocaleDateString()}</div>
    </div>
  </>
}
export default BoardItem;