// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Banner from "./components/banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Register from "./components/register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            {/* <Route index element={<Banner />} /> */}
            
          </Route>
          <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
        </Routes>
    </BrowserRouter>
      {/* <Banner /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
