import { Component } from 'react';
import styled from '@emotion/styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import Notification from './Notification/Notification';

const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  text-align: center;
  border: black solid 1px;
`;
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => value + acc, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleBtnClick}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              ></Statistics>
            ) : (
              <Notification message={'There is no feedback'} />
            )}
          </Section>
        </Container>
      </>
    );
  }
}
