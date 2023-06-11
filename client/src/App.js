import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/Login";
import Post from "./components/post/Post"
import SignUp from "./components/auth/SignUp";
import Navbar from "./components/layout/NavBar";
import Profile from "./components/profile";
import Footer from "./components/layout/Footer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});





function App() {
  return (
   <div className="App">
    <ApolloProvider client={client}>
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          {/* <Route path="/Google" element={<Google/>}/> */}
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Post" element={<Post/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
       
        <Footer/>
      </Router>
    </ApolloProvider>
   </div>
  );
}

export default App;


