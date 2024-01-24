import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth , sendPasswordReset} from "./firebase";
import './App.css';



const ForgotPassword = () =>{
    const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  //const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    //if (user) navigate("/login/*");
  }, [user, loading]);
  return (
    <div className="reset">
      <div className="reset__container">
        <link href="https://img.freepik.com/free-vector/reset-password…b6e27e814b1824c24655e2531caaefe2926125a13dc016d46"/>
        <h4 class="heading" >Reset Password</h4>
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter E-mail Address"
        />
        
        <button
          className="reset__btn"
          onClick={() => sendPasswordReset(email)}
        >
          Send password reset email
        </button>
        <div>
          <Link to="/Login">Back to Login</Link> 
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
