import React from "react";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="/src/logo.jpg" alt="Logo" style={{ marginRight: "10px" }} />
        <h1>Dangerous Zone</h1>
      </div>
      <nav>
        <a href="#home" style={{ marginRight: "20px" }}>
          Home
        </a>
        <a href="#about">About</a>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}

export default Header;
