import { Routes, Route} from 'react-router-dom';
import Login from './Login'
import Home from "./Home"
import './App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/inicio" element={<Home/>} /> 
      </Routes>
  )
}

export default App
