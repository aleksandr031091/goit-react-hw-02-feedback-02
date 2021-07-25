import React from "react";
import ProtoType from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>total: {countTotalFeedback}</p>
      <p>{countPositiveFeedbackPercentage}</p>
    </>
  );
};

export default Statistics;

Statistics.prototype = {
  good: ProtoType.number.isRequired,
  neutral: ProtoType.number.isRequired,
  bad: ProtoType.number.isRequired,
  total: ProtoType.number.isRequired,
  positivFeedback: ProtoType.number.isRequired,
};
