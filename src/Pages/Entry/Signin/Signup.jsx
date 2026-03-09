import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Signin/Signin.css"
function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", password: ""
  });

  const signup = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/auth/signup",
        user
      );

      alert("Signup Success");
      navigate("/");

    } catch {
      alert("Signup Failed");
    }
  };

  return (
    <div className="signup">
      <div className="signup-tittle">
      <h2 style={{color:"white"}}>Signup</h2>

      <input placeholder="Username"
        onChange={e => setUser({...user, name: e.target.value})} /><br></br><br></br>

      <input placeholder="Email"
        onChange={e => setUser({...user, email: e.target.value})} /><br></br><br></br>

      <input type="password" placeholder="Password"
        onChange={e => setUser({...user, password: e.target.value})} /><br></br><br></br>

      <button onClick={signup} style={{padding:"10px 20px"}}>Signup</button>

      <p style={{color:"white"}}>
        Already have Account? <Link to="/" style={{font:"20px",textDecoration:"none",color:"black"}}>Login</Link>
      </p>
      </div>
    </div>
  );
}

export default Signup;
