import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
function App() {
  return (
   <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Google" element={<Google/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
   </div>
  );
}

export default App;


