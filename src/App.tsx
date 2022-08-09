import { Route, Routes } from 'react-router-dom';
import SignUp from 'pages/SignUp';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import SignIn from 'pages/SignIn';

function App() {
  return (
  // TODO check routes with hub
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
