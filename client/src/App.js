import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import Navbar from './components/NavBar';
import Footer from './components/Footer';
=======
import NavBar from './components/NavBar';
>>>>>>> Develop
function App() {
  return (
   <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
<<<<<<< HEAD
=======
          <Route path="/Google" element={<Google/>}/>
>>>>>>> Develop
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
   </div>
  );
}

export default App;


