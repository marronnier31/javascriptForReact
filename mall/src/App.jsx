import './App.css'
import { RouterProvider } from 'react-router-dom'
import Root from './router/root'

function App() {
  
  return (
    <>
      <RouterProvider router={Root}/>
    </>
  )
}

export default App
