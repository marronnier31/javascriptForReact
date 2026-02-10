import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import './css/App.css'
import { useState, useRef } from 'react'



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
 
function App() { 
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  //이벤트함수(setTodos 생성, 핸들러함수)
  const onCreate = content => {
    let newTodo = { 
      id: idRef.current++, 
      isDone: false, 
      content: content, 
      date: new Date().getTime(), 
    }
    setTodos([newTodo, ...todos])
  };
  //이벤트함수(setTodos(데이터) 수정)
  // const onUpdate = id=> {
  //   setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone}: todo))
  // }

  return (
    <>
      <div className="App">
        <Header/>
        <Editor onCreate = {onCreate}/>
        <List todos = {todos} onUpdate = {id =>setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone}: todo))}
          onDelete = {id => setTodos(todos.filter(todo => todo.id !== id))}/>
      </div>
    </>
  )
}

export default App
