import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./code/components/header.jsx";
import Footer from "./code/components/footer.jsx";
import App from "./code/pages/index.jsx"; // Tela principal
import Login from "./code/pages/login.jsx"; // Tela de login

function Root() {
  const [currentPage, setCurrentPage] = useState("app"); // "app" ou "login"

  const renderPage = () => {
    if (currentPage === "app") {
      return <App />;
    } else if (currentPage === "login") {
      return <Login onBack={() => setCurrentPage("app")} />;
    }
  };

  return (
    <>
      <Header 
        onLoginClick={() => setCurrentPage("login")}
        onHomeClick={() => setCurrentPage("app")} 
      />
      {renderPage()}
      <Footer />
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
