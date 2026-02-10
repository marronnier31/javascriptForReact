import '../css/TodoItem.css'; 
 
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

  return <>
    <div className="TodoItem"> 
      <input type="checkbox" checked={isDone} onChange={e =>onUpdate(id)} /> 
      <div className="content">{content}</div> 
      <div className="date">{new Date(date).toLocaleDateString()}</div> 
      <button onClick={e=>onDelete(id)}>삭제</button> 
    </div> 
  </>
};

export default TodoItem; 