import React from "react";

function MainContent() {
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
        <h2>Cool Description of Dangerous Trips</h2>
        <p>Book your dangerous trip with us and explore the unexplored!</p>
        <button onClick={scrollToBooking}>Book Now a Trip</button>
      </div>
      {/* Background image (consider adding via CSS for better control) */}
    </main>
  );
}

export default MainContent;
