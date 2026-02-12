import { useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'


function App() {
 const [stus, setStus] = useState([]);
 const idRef = useRef(0);
 const onCreate = (name, kor, eng, math) => { 
    const newStu = { 
      id: idRef.current++, 
      name: name, 
      kor: kor,
      eng : eng,
      math: math,
      sum : parseInt(kor)+parseInt(eng)+parseInt(math),
      avg : (parseInt(kor)+parseInt(eng)+parseInt(math))/3, 
      date: new Date().getTime(), 
    }; 
 
    setStus([newStu, ...stus]); 
  };
  const onUpdate = (id, kor, eng, math)=>{
    setStus(stus.map((stu) => stu.id === id ? { ...stu, kor: kor, eng: eng, math: math, sum: parseInt(kor)+parseInt(eng)+parseInt(math), avg: (parseInt(kor)+parseInt(eng)+parseInt(math))/3, date: new Date().getTime()} : stu ))
  };
  return (
    <>
    <Header/>
    <Editor onCreate = {onCreate}/>
    <List stus = {stus} onUpdate={onUpdate} onDelete={id=>setStus(stus.filter((stu) => stu.id !== id))}/>
    </>
  )
}

export default App
