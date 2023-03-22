import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SchoolInfo from "./pages/SchoolInfo";

const checkIfUserIsAuthenticated = () => {
  const userInfo = localStorage.getItem('userInfo')
  if (userInfo) {
    return true;
  }
  return false;
}

function PrivateRoute({ children }) {
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

function PublicOnlyRoute({ children }) {
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
       <Route
        path="/school-info"
        element={
          <PrivateRoute>
            <SchoolInfo />
          </PrivateRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}