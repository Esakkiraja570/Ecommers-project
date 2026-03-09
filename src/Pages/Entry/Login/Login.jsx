import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Login/Login.css";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const login = async () => {

    try {

      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        user
      );

      localStorage.setItem("token", res.data);

      alert("Login Success");

      navigate("/home");

    } catch (error) {

      console.error(error);
      alert("Login Failed");

    }

  };

  return (

    <div className="login-container">

      <div className="login-form-container">

        <h2 style={{ color: "white" }}>Login</h2>

        <input
          placeholder="Email"
          value={user.email}
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({ ...user, password: e.target.value })
          }
        />

        <br /><br />

        <button onClick={login}>Login</button>

        <p style={{ color: "white" }}>
          Don't have account?
          <Link
            to="/signup"
            style={{
              fontSize: "20px",
              textDecoration: "none",
              color: "black"
            }}
          >
            Signup
          </Link>
        </p>

      </div>

    </div>

  );
}

export default Login;