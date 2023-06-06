import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import NavBar from './components/layout/NavBar';
import Profile from './components/profile';
function App() {
  return (
   <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          {/* <Route path="/Google" element={<Google/>}/> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
        {/* <Footer/> */}
      </Router>
   </div>
  );
}

export default App;


