import { useState } from 'react'
import logo from "./assets/logo.png"
import './App.css'

function App() {

  return (
    <div className="login-container">
      <div className="logo-container">
        <img 
          src={logo} 
          alt="Logo" 
          className="logo" 
        />
      </div>
      <div className="form-container">
        <img src={logo} alt="" className='about-logo' />
        <h2 className="title">Sign in to your account</h2>
        <p className="subtitle">
          Welcome back! Please enter your details.
        </p>
        <form className="form">
          <input 
            type="text" 
            placeholder="Username" 
            className="input" 
          />
          <input 
            type="password" 
            placeholder="Enter your password" 
            className="input" 
          />
          <div className="checkbox-container">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="label">
              Remember me for 30 days
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password
            </a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        {/* <p className="or-text">or sign in with</p>
        <div className="social-buttons-container">
          <button className="social-button">Google</button>
          <button className="social-button">Apple</button>
          <button className="social-button">Facebook</button>
          <button className="social-button">X</button>
          <button className="social-button">GitHub</button>
          <button className="social-button">Bitbucket</button>
          <button className="social-button">Salesforce</button>
          <button className="social-button">SSO</button>
        </div> */}
        <p className="sign-up-text">
          Don’t have an account? <a href="/signup" className="sign-up-link">Log in</a>
        </p>
      </div>
    </div>
  )
}

export default App
