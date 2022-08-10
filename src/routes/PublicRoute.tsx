import { Navigate, Outlet, useLocation } from 'react-router-dom';

function PublicRoute() {
  const location = useLocation();

  // const { isAuth } = useSelector((state: RootState) => state.auth);
  const isLoggedin = false;

  return isLoggedin
    ? <Navigate to="/dashboard" state={{ from: location }} />
    : <Outlet />;
}

export default PublicRoute;
