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
      const response = await axios.post('http://localhost:3000/usuarios/login', {
        username: username,
        password: password,
      });
      
      console.log('Resposta completa da API:', response); // Debug da resposta completa
    
      if (response.status === 200) {
        alert('Login bem-sucedido!');
      }
    } catch (error) {
      if (error.response) {
        console.log('Erro:', error.response.data);
  
        if (error.response.status === 401) {
          alert('Credenciais inválidas. Por favor, tente novamente.');
          setError('Credenciais inválidas. Por favor, tente novamente.');
        } else {
          setError('Ocorreu um erro ao tentar fazer login.');
        }
      } else {
        setError('Não foi possível conectar ao servidor. Verifique sua conexão.');
      }
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
