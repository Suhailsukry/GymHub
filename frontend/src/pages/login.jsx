import React from "react";
import "../styles/login/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2>Welcome</h2>
      <p className="sub-text">Sign in to continue your fitness journey</p>
      
      <form className="login-form">
        {/* Email Section */}
        <label htmlFor="email" className="input-label">Email</label>
        <input type="email" id="email" placeholder="example@email.com" />

        {/* Password Section */}
        <label htmlFor="password" className="input-label">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        {/* Login Button */}
        <button type="submit">Login</button>

        {/* Forgot Password (Link) */}
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>

        {/* Sign Up Link */}
        <p className="account-text">
          If you already have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
