import React, { Component } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;

    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback()}
          />
        </Section>
      </>
    );
  }
}

export default App;
