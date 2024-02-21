import React, { useState, useEffect } from "react";

function Trips() {
  const scrollToBooking = () => {
    document
      .getElementById("bookingSection")
      .scrollIntoView({ behavior: "smooth" });
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("test");
    fetch("https://danger-zone-api.azurewebsites.net/trips")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log("test");
  }, []);

  return (
    <main style={{ textAlign: "center", position: "relative" }}>
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "black" }}>Trips</h2>
        {data &&
          data.map((trip) => (
            <div
              key={trip.id}
              style={{
                display: "flex",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                padding: "20px",
                borderRadius: "10px",
                alignItems: "center",
                backgroundColor: "black",
                marginBottom: "20px",
                maxWidth: "500px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 }}>{trip.title}</h3>
                <p>{trip.description}</p>
              </div>
              <img
                src={`https://stdangerzone001.blob.core.windows.net/trip-pictures/${trip.id}.webp`}
                alt={trip.title}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                }}
              />
            </div>
          ))}
        <button onClick={scrollToBooking}>Book Now a Trip</button>
      </div>
      {/* Background image (consider adding via CSS for better control) */}
    </main>
  );
}

export default Trips;
