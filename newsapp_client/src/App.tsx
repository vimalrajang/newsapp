import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signin from './Pages/SignUp/SignUp';
import Header from './Components/Header/Header';
import Categories from './Pages/Categories/Categories';
import Bookmark from './Pages/Bookmarks/Bookmark';
import Profile from './Pages/Profile/Profile';

function App() {
  var apikey = "";
  apikey = "c211c95053a34ab09b54a528344963e7";
  window.localStorage.setItem("apiKey","c211c95053a34ab09b54a528344963e7")
  window.localStorage.setItem("country","in")
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/favorite" element={<Favorites />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
