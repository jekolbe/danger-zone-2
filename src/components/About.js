import React from "react";

function Trips() {
  const scrollToBooking = () => {
    document
      .getElementById("bookingSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ textAlign: "center", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <h2>Trips</h2>
        <p>Trips</p>
        <button onClick={scrollToBooking}>Book Now a Trip</button>
      </div>
      {/* Background image (consider adding via CSS for better control) */}
    </main>
  );
}

export default Trips;
