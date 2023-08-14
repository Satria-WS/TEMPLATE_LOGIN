import { useState } from "react";
import Home from "./component/Home";
import Login_1 from "./component/login_1/Login_1";
import Login_2 from "./component/login_2/Login_2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login1" element={<Login_1/>} />
        <Route path="/Login2" element={<Login_2/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
