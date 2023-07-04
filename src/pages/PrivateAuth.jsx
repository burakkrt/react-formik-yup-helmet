import { getContext } from "../context/ContextProvider.jsx";
import { Navigate } from "react-router-dom";

export default function PrivateAuth({ children }) {
  const { login } = getContext();
  let inital = true;

  if (localStorage.getItem("inital")) {
    inital = false;
  } else {
    localStorage.setItem("inital", "true");
  }

  if (!login) {
    return <Navigate to="/sing-up" state={{ inital: inital }} replace={true} />;
  } else return children;
}