import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  console.log("page private and check auth");
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/login" replace={true} /> : <Outlet />;
};

export default PrivateRouter;
