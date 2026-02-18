import { Route, Routes, useSearchParams } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotFound from './components/NotFound'
import New from './components/New'
import Detail from './components/Detail'
import Edit from './components/Edit'
import { createContext, useReducer, useRef } from 'react'

const mockData = [{
  no: 1,
  title: '냉방문의',
  writer: '전우림',
  content: '에어컨이 이상합니다.',
  regDate: new Date(2026,1,1).getTime()
},
{
  no: 2,
  title: '추가수업',
  writer: '전세림',
  content: '추가수업을 신청합니다.',
  regDate: new Date(2026,1,2).getTime()
}];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item => item.no === action.data.no ? action.data : item);
    case 'DELETE':
      return state.filter(item => item.no !== action.no);
    default:
      return state;
  }
}

export const BoardStateContext = createContext();
export const BoardDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const noRef = useRef(3);
  //이벤트처리 onCreate, onUpdate, onDelete
  const onCreate = (title, writer, content, regDate) => {
    const newItem = {
      no: noRef.current++,
      title,
      writer,
      content,
      regDate
    }
    dispatch({ type: "CREATE", data: newItem });
  }
  const onUpdate = (no, title, writer, content, regDate) => {
    const newItem = {
      no,
      title,
      writer,
      content,
      regDate
    }
    dispatch({ type: "UPDATE", data: newItem });
  }
  const onDelete = no => dispatch({ type: "DELETE", no })


  return (
    <>
      <h1>KH 게시판</h1>
      <BoardStateContext.Provider value={data}>
        <BoardDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/detail/:no' element={<Detail />} />
            <Route path='/edit/:no' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>

    </>
  )
}

export default App
