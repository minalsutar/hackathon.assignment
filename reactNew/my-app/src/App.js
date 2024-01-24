//import logo from './logo.svg';
//import './App.css';
//import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login.js';
import ForgotPassword from './ForgotPassword.js';
import Sidebar from './Sidebar.js';
import Home from './Home';
import Product from './Product';
import Category from './Category';


function App(){

  
  
  return (
    <>
    <Router>
    
      
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
      <Route path="/Sidebar" element={<Sidebar />}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Category" element={<Category/>}/>
       </Routes>
       
     
    </Router>
    

    
    </>
  );
}

export default App;
