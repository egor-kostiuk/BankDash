import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "/src/routes/ProtectedRoute.jsx";
import { LoadingBarWrapper } from "/src/utils/LoadingWrapper.jsx";
import { auth } from "/src/services/api/firebase.js";

// Pages imports
import { LoginPage } from "/src/app/pages/Auth/LoginPage.jsx";
import { SignUpPage } from "/src/app/pages/Auth/SignUpPage.jsx";
import { DashboardPage } from "/src/app/pages/DashboardPage.jsx";
import { TestPage } from "./app/pages/TestPage.jsx"; // TODO: fix import
import { SettingsPage } from "/src/app/pages/SettingsPage.jsx";

import './styles/App.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ color: 'transparent' }}>Loading...</div>;
  }

  return (
    <Router>
      <LoadingBarWrapper>
        <Routes>
          {/* Public routes */}
          <Route exact path={'/'} element={<LoginPage />} />
          <Route exact path={'/login'} element={<LoginPage />} />
          <Route exact path={'/sign-up'} element={<SignUpPage />} />

          {/* Protected routes */}
          <Route
            exact
            path={'/bankdash'}
            element={
              <ProtectedRoute user={user}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={'/test'}
            element={
              <ProtectedRoute user={user}>
                <TestPage />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path={'/settings'}
            element={
              <ProtectedRoute user={user}>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </LoadingBarWrapper>
    </Router>
  )
}
