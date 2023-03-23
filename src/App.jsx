import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" component={Login} />
        <Route path="/inicio" component={Inicio} />
      </Router>
    </BrowserRouter>
  )
}

export default App
