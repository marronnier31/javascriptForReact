import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState, useRef, useReducer } from 'react'
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
 
function App() { 
  const [todos, dispatch] = useReducer(reducer, mockData);
  //const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //이벤트함수(setTodos 생성, 핸들러함수)
  // const onCreate = content => {
  //   let newTodo = { 
  //     id: idRef.current++, 
  //     isDone: false, 
  //     content: content, 
  //     date: new Date().getTime(), 
  //   }
  //   setTodos([newTodo, ...todos])
  // };
  //이벤트함수(setTodos(데이터) 수정)
  // const onUpdate = id=> {
  //   setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone}: todo))
  // }

  return (
    <>
      <div className="App">
        <Header/>
        <Exam/>
        <Editor onCreate = {content=>dispatch({type:"onCreate", data:{ 
      id: idRef.current++, 
      isDone: false, 
      content: content, 
      date: new Date().getTime(), 
    }})}/>
        <List todos = {todos} onUpdate = {id =>dispatch({type:"onUpdate", data:id})}
          onDelete = {id => dispatch({type:"onDelete", data: id})}/>
      </div>
    </>
  )
}

export default App
