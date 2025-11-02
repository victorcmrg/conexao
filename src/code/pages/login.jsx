import React from "react";
import "../../style/login.css";

import LoadingScreen from "../components/LoadingScreen.jsx";
import Overlay from '../components/overlay.jsx';


export default function Login() {
  return (
    <div className="login-page">
      <div className="topLogin"/>
      <div className="login-frame">
        {/* Formulário de Login */}
        <div className="login-left">
          <h2>Login</h2>
          <input type="text" placeholder="Email ou Usuário" />
          <input type="password" placeholder="Senha" />
          <a href="#" className="forgot-password">Esqueceu a senha?</a>
          <button className="btn-login">ENTRAR</button>
        </div>

        {/* Lado direito com boas-vindas */}
        <div className="login-right">
          <h2>Bem vindo(a) de Volta!</h2>
          <p>Para se manter conectado, por favor, faça o login com suas informações</p>
          <button className="btn-register">Registrar</button>
        </div>
      </div>
    </div>
  );
}
