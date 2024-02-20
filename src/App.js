import React from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import BookingSection from "./BookingSection"; // Assuming you created this component

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <BookingSection />
      {/* You can add a Footer component in a similar way */}
    </div>
  );
}

export default App;
