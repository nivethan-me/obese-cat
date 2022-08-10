import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PrivateRoute() {
  const location = useLocation();

  // You can Get the state from redux
  // const { isAuth } = useSelector((state: RootState) => state.auth);
  const isLoggedin = false;

  return isLoggedin
    ? <Outlet />
    : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
