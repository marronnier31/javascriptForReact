import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState, useRef, useReducer, useCallback, createContext, useMemo } from 'react'
import Exam from './components/Exam'

const mockData = [ 
  { 
    id: 0, 
    isDone: false, 
    content: "React 공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 1, 
    isDone: false, 
    content: "스프링부트공부하기", 
    date: new Date().getTime(), 
  }, 
  { 
    id: 2, 
    isDone: false, 
    content: "자바공부하기", 
    date: new Date().getTime(), 
  }, 
]; 

function reducer(todos, action) {
  switch (action.type) {
    case "onCreate":
      
      return [action.data, ...todos];
    case "onUpdate":
      
      return todos.map(todo => todo.id === action.data? {...todo, isDone: !todo.isDone}: todo);
    case "onDelete":
      
      return todos.filter(todo => todo.id !== action.data);
  
    default:
      return todos;
  }
}

//공용으로 사용되는 저장소
export const TodoStateContext =createContext();
export const TodoDispatchContext =createContext();
 
function App() { 
  const [count, setCount] = useState(10);
  const [todos, dispatch] = useReducer(reducer, mockData);
  //const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //이벤트함수(setTodos 생성, 핸들러함수)
  const onCreate = useCallback(content => dispatch({type:"onCreate", data:{ 
      id: idRef.current++, 
      isDone: false, 
      content: content, 
      date: new Date().getTime(), 
    }}),[]);

  //이벤트함수(setTodos(데이터) 수정)
  const onUpdate = useCallback(id =>dispatch({type:"onUpdate", data:id}),[])
  const onDelete = useCallback(id => dispatch({type:"onDelete", data: id}),[])

  //이벤트핸들러기능을 딱 한번만 실행한다.
  const memorizedDispatch = useMemo(()=>{
    return {onCreate, onUpdate, onDelete}
  },[onCreate, onUpdate, onDelete]);

  return (
    <>
      <div className="App">
        <Header count={count}/>
        <TodoStateContext.Provider value={{todos}}>
          <TodoDispatchContext.Provider value={memorizedDispatch}>
        <Exam/>
        <Editor/>
        <List/>
        </TodoDispatchContext.Provider>
           </TodoStateContext.Provider>
      </div>
    </>
  )
}

export default App
