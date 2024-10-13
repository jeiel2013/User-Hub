import { useState } from "react";
import axios from "axios";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita recarregar a página ao enviar o formulário

    try {
      const response = await axios.get('http://localhost:3000/usuarios', {
        username: username,
        password: password,
      });
    
      console.log('Resposta completa da API:', response); // Debug da resposta completa
    
      if (response.status === 200) {
        alert('Login bem-sucedido!');
      } else {
        alert('Falha no login. Verifique suas credenciais.');
      }
    
    } catch (error) {
      // Exibe mais informações para debug
      if (error.response) {
        console.log('Erro na resposta da API:', error.response.data); // Dados retornados pela API
        console.log('Status HTTP:', error.response.status); // Código de status HTTP
        console.log('Cabeçalhos da resposta:', error.response.headers); // Cabeçalhos da resposta
      } else {
        console.log('Erro sem resposta da API:', error.message);
      }
      alert('Login falhou. Verifique suas credenciais.');
    }
    
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="form-container">
        <img src={logo} alt="" className="about-logo" />
        <h2 className="title">Sign in to your account</h2>
        <p className="subtitle">Welcome back! Please enter your details.</p>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          {error && <p className="error-message">{error}</p>}
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
          Don’t have an account?{" "}
          <a href="/signup" className="sign-up-link">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
