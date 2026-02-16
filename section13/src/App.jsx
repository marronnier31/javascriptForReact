import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import New from './components/New'
import Detail from './components/Detail'
import Edit from './components/Edit'

function App() {
  
  return (
    <>
    <h1>KH 게시판</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/> 
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
