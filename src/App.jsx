import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {auth} from "./services/api/firebase.js";

import {LoginPage} from "/src/app/pages/Auth/LoginPage.jsx";
import {SignUpPage} from "/src/app/pages/Auth/SignUpPage.jsx";

import './styles/App.css';

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<LoginPage/>} />
        <Route exact path={'/login'} element={<LoginPage/>} />
        <Route exact path={'/sign-up'} element={<SignUpPage/>} />
      </Routes>
    </Router>
  )
}
