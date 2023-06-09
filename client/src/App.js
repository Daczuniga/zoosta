<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Post from "./components/post/Post"
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/NavBar";
import Profile from "./components/profile";
import Footer from "./components/layout/Footer";

=======
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
<<<<<<< HEAD
import Navbar from './components/Navbar';
>>>>>>> 8895c6a (create routes for pages, update client-pages and styles)
=======
import Navbar from './components/NavBar';
import Footer from './components/Footer';
>>>>>>> efdc940 (fixed errors added footer)
function App() {
  return (
   <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
<<<<<<< HEAD
          {/* <Route path="/Google" element={<Google/>}/> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8dc1288 (merge conflict)
       
        <Footer/>
=======
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
<<<<<<< HEAD
>>>>>>> 8895c6a (create routes for pages, update client-pages and styles)
<<<<<<< HEAD
>>>>>>> f101d3d (merge conflict)
=======
=======
        <Footer/>
>>>>>>> efdc940 (fixed errors added footer)
<<<<<<< HEAD
>>>>>>> f95ebd7 (merge conflict)
=======
=======
>>>>>>> bf10324 (styled homepage)
>>>>>>> 8dc1288 (merge conflict)
      </Router>
   </div>
  );
}

export default App;
