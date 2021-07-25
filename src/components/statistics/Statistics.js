import React from "react";

const Statistics = ({ good, neutral, bad, countTotalFeedback }) => {
  return (
    <ul>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {countTotalFeedback}</li>
    </ul>
  );
};

export default Statistics;
