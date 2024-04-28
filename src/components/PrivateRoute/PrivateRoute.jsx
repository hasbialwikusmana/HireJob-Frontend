import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

PivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PivateRoute;
