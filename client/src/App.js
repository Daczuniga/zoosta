import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';
import Post from './pages/Post';
import Footer from './components/Footer';



function App() {
  return (
   <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          {/* <Route path="/Google" element={<Google/>}/> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Post" element={<Post/>}/>
        </Routes>
       
        <Footer/>
      </Router>
   </div>
  );
}

export default App;


