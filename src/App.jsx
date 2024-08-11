import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {auth} from "./services/api/firebase.js";

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
        <Route exact path={'/'} element={<div>Test</div>}/>
      </Routes>
    </Router>
  )
}
