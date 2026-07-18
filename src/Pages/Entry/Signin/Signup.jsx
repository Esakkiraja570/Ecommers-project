import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signin.css";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    try {
      await axios.post(
        "http://localhost:8080/api/auth/signup",
        user
      );
      alert("Signup Success");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Signup Failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-page-wrapper">
      {/* Decorative ambient blur background elements */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      <div className="signup-card glass-panel-dark fade-in">
        <div className="signup-header-section">
          <h2>Create Account</h2>
          <p>Join LuxeMart and explore premium shopping catalogs</p>
        </div>

        <form onSubmit={signup} className="signup-form">
          <div className="input-group-modern">
            <input
              type="text"
              required
              placeholder="Username"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>

          <div className="input-group-modern">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="input-group-modern">
            <input
              type="password"
              required
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button type="submit" className="signup-submit-btn" disabled={isLoading}>
            {isLoading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-switch-text">
          Already have an account?{" "}
          <Link to="/" className="auth-link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
