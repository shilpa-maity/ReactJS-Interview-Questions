import React from "react";
import "./Home.css"; // Import the CSS

function Home() {
  return (
    <div className="card mb-4 home-card">
      <div className="card-body">
        <h2 className="home-title">Home</h2>
        <p className="home-text">
          Welcome to our travel agency. Explore amazing tours with us!
        </p>
      </div>
    </div>
  );
}

export default Home;
