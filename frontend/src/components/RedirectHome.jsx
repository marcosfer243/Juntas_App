import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectHome({ children }) {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return <>{children}</>;
}
