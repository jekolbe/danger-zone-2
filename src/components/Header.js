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
        <img
          src={require("../assets/danger-zone.jpg")}
          alt="Logo"
          style={{ marginRight: "10px", height: "50px" }}
        />
        <h1>Danger Zone</h1>
      </div>
      <nav>
        <a href="home" style={{ marginRight: "20px" }}>
          Home
        </a>
        <a href="trips" style={{ marginRight: "20px" }}>
          Trips
        </a>
        <a href="about">About</a>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}

export default Header;
