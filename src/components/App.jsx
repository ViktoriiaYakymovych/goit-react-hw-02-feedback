import React, { Component } from 'react';

export class App  extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = (e) => {
    e.preventDefault();

    const {good, neutral, bad} = this.state;
    
    if(e.target.textContent === 'Good') {
      this.setState({good: good + 1});
    } else if (e.target.textContent === 'Neutral') {
      this.setState({neutral: neutral + 1});
    } else if(e.target.textContent === 'Bad') {
      this.setState({bad: bad + 1})
    }
  }

  render() {
    return <section>
              <h1>Please leave feedback</h1>
              <div>
                <button onClick={this.onLeaveFeedback}>Good</button>
                <button onClick={this.onLeaveFeedback}>Neutral</button>
                <button onClick={this.onLeaveFeedback}>Bad</button>
              </div>
              <div>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {this.countTotalFeedback()}</p>
                <p>Positive feedback: {this.countPositiveFeedbackPercentage() || '0'}%</p>
              </div>
            </section>
  }
}
