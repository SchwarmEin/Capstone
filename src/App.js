<<<<<<< HEAD
import React from 'react';
import './index.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constant/routes";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
>>>>>>> 218c01c3d5080de081bc67711bce4dbb1628dbf2

function App() {
  return (
    <Router>
      <Navbar />
<<<<<<< HEAD
    </Router>
  );
  }
=======
      <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}
>>>>>>> 218c01c3d5080de081bc67711bce4dbb1628dbf2

export default App;
