import React from "react";
import imgAlma_header from "../../assets/alma_header.png";
import "../../style/header.css"; 

export default function Header({ onLoginClick, onHomeClick }) {
  const links = [
    { text: "SOBRE NÓS", href: "#" },
    { text: "TRABALHE CONOSCO", href: "#" },
    { text: "EVENTOS", href: "#" },
    { text: "CAMPANHAS", href: "#" },
    { text: "CAMPANHAS", href: "#" },
  ];

  return (
    <header className="header">
      <div className="container">
      <img
        className="imgAlma_header"
        src={imgAlma_header}
        onClick={onHomeClick}
        alt="ALMA"
        style={{ cursor: "pointer" }} // indica que é clicável
      />

        <nav>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="btn-primary">DOAR AGORA</button>
          <button className="btn-secondary" onClick={onLoginClick}>
            entrar
          </button>
        </div>
      </div>
    </header>
  );
}
