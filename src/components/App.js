import React, { Component } from "react";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Message from "./notification/Notification";

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

  countPositiveFeedbackPercentage = () => {
    const procent = (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(procent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();

    return (
      <>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Message message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={total}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
