import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/SignUp/SignUp';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
