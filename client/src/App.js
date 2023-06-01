import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
function App() {
  return (
   <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </Router>
   </div>
  );
}

export default App;


