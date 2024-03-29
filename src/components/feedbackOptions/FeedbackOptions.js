import React from "react";
import ProtoType from "prop-types";
import { v4 as uuidv4 } from "uuid";
import css from "./FeadbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          className={css.button}
          key={uuidv4()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: ProtoType.array.isRequired,
  onLeaveFeedback: ProtoType.func.isRequired,
};
