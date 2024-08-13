import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {auth} from "/src/services/api/firebase.js";

import {LoginPage} from "/src/app/pages/Auth/LoginPage.jsx";
import {SignUpPage} from "/src/app/pages/Auth/SignUpPage.jsx";
import {DashboardPage} from "/src/app/pages/DashboardPage.jsx";
import {TestPage} from "./app/pages/TestPage.jsx";

import './styles/App.css';

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <Router basename="/app">
      <Routes>
        <Route exact path={'/'} element={<LoginPage/>} />
        <Route exact path={'/login'} element={<LoginPage/>} />
        <Route exact path={'/sign-up'} element={<SignUpPage/>} />
        <Route exact path={'/bankdash'} element={<DashboardPage/>} /> {/* TODO: if user signed up */}
        <Route exact path={'/test'} element={<TestPage/>} /> {/* TODO: implement other pages */}
      </Routes>
    </Router>
  )
}
