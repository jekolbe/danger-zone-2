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
      ></div>
      {/* Background image (consider adding via CSS for better control) */}
    </main>
  );
}

export default Trips;
