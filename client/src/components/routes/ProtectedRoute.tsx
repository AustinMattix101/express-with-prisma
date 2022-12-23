import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, user }:any) {
  const location = useLocation();
  user = localStorage.getItem("authToken");
  if (!user) {
    return <Navigate to="/signin" replace state={{from: location}}/>;
  } else {
    return children;
  }
}

export default ProtectedRoute;