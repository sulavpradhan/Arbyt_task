import React from "react";

const FeedbackStats = ({ feedback }) => {
  var average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length == 1
          ? `${feedback.length} Review`
          : `${feedback.length} Reviews`}{" "}
      </h4>
      <h4>Average: {`${average}`}</h4>
    </div>
  );
};

export default FeedbackStats;
