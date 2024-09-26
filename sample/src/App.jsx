import About from './About';
import Login from './Login';
import Signup from './Signup';
import{BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Header(){
  return(
    <div>
      <Link to="/">About</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
    </div>
  )
}

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<About/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path="/Signup"element={<Signup/>}></Route>
          </Routes>
          </BrowserRouter>
    </div>
  )
}
export default App;