import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import "../styles/auth.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log("Form submitted:", formData);
   // After login/signup → go to Landing Page
   navigate("/landing");
 };


  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="auth-toggle">
          <button
            className={"toggle-btn " + (isLogin ? "active" : "")}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={"toggle-btn " + (!isLogin ? "active" : "")}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back" : "Join VigilantLog"}</h2>
          <p className="muted">
            {isLogin
              ? "Sign in to monitor & secure your system"
              : "Create your VigilantLog account"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <label className="field">
              <span className="label">Full Name</span>
              <div className="input-wrap">
                <User className="icon" />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>
            </label>
          )}

          <label className="field">
            <span className="label">Email</span>
            <div className="input-wrap">
              <Mail className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                required
              />
            </div>
          </label>

          <label className="field">
            <span className="label">Password</span>
            <div className="input-wrap">
              <Lock className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword((s) => !s)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </label>

          {!isLogin && (
            <label className="field">
              <span className="label">Confirm Password</span>
              <div className="input-wrap">
                <Lock className="icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  aria-label="Toggle confirm password"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </label>
          )}

          {!isLogin ? (
            <label className="terms">
              <input type="checkbox" required />
              <span>
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </label>
          ) : null}

          <button type="submit" className="submit-btn">
            <span>{isLogin ? "Sign In" : "Create Account"}</span>
            <ArrowRight className="arrow" />
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <span>
              Don't have an account?{" "}
              <button className="link-btn" onClick={() => setIsLogin(false)}>
                Sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button className="link-btn" onClick={() => setIsLogin(true)}>
                Sign in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
