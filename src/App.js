import React from "react";
import ReactDOM from "react-dom/client";
import RatingBreakdown from "./RatingBreakdown";

const AppLayout = () => {
  return (
    <div className="app">
      <RatingBreakdown />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
