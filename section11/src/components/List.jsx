import { useContext, useMemo, useState } from 'react';
import '../css/List.css'
import TodoItem from './TodoItem';
import { TodoStateContext } from '../App';

const List =()=>{
  const {todos} = useContext(TodoStateContext);
 
  const [search, setSearch] = useState('');
 
  //주의바람
  const getFilterData = ()=>{
    if(search === ''){
      return todos;
    }
    return todos.filter(todo=>{
      return todo.content.toLowerCase().includes(search.toLowerCase())
    })
  }
  //전체리스트갯수, 완료된 갯수, 미완료된갯수
  const {totalCount,doneCount, notDoneCount} = useMemo(()=>{
    let totalCount = todos.length;
    let doneCount = todos.filter(todo => todo.isDone === true).length;
    let notDoneCount = totalCount - doneCount;
    return {totalCount, doneCount, notDoneCount};
  },[todos])
   
  return <>
  <div className="List"> 
      <h4>Todo List🔆 </h4> 
      <div>
        <p>total: {totalCount}</p>
        <p>done: {doneCount}</p>
        <p>not done: {notDoneCount}</p>
      </div>
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="검색어를 입력하세요" /> 
      <div className="todos_wrapper"> 
        {getFilterData().map((todo)=>{ 
          return <TodoItem key={todo.id} {...todo} />
        })}
      </div> 
    </div>
  </>
}

export default List;