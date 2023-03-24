import { Routes, Route} from 'react-router-dom';
import Login from './Login'
import './App.css'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/inicio" element={} /> */}
      </Routes>
  )
}

export default App
