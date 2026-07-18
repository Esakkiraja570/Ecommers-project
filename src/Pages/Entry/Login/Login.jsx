import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
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
      alert("Login Failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-wrapper">
      {/* Visual background decorative orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      
      <div className="login-card glass-panel-dark fade-in">
        <div className="login-header-section">
          <h2>Welcome Back</h2>
          <p>Login to access your premium shopping experience</p>
        </div>

        <form onSubmit={login} className="login-form">
          <div className="input-group-modern">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
            />
          </div>

          <div className="input-group-modern">
            <input
              type="password"
              required
              placeholder="Password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
            />
          </div>

          <button type="submit" className="login-submit-btn" disabled={isLoading}>
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="auth-switch-text">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;