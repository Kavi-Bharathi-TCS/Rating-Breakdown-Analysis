import React, { useState } from "react";
import "./RatingBreakdown.css";

const RatingBreakdown = () => {
  const initialRatings = [35, 50, 40, 22, 10];
  const [ratings, setRatings] = useState(initialRatings);

  const regenerateRatings = () => {
    const newRatings = ratings.map(() => Math.floor(Math.random() * 51));
    setRatings(newRatings);
  };

  return (
    <>
      <div className="rating-breakdown">
        <h1>Rating Breakdown</h1>
        <div className="chart-container">
          <span className="y-word">No. of Rating</span>
          <div className="y-axis">
            {[50, 40, 30, 20, 10, 0].map((value) => (
              <div key={value} className="y-axis-value">
                {value}
              </div>
            ))}
          </div>
          <div className="chart">
            {ratings.map((count, index) => (
              <div
                key={index}
                className="bar"
                style={{ height: `${(count / 50) * 100}%` }}
              >
                <span>{count}</span>
              </div>
            ))}
          </div>
        </div>
        <span className="rating-label">Rating</span>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button onClick={regenerateRatings}>Regenerate</button>
      </div>
    </>
  );
};

export default RatingBreakdown;
