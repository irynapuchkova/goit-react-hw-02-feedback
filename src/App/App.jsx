import 'normalize.css';

import { Component } from 'react';

import Section from 'Section ';
import Statistics from 'Statistics';
import FeedbackOptions from 'FeedbackOptions';
import Notification from './Notification';
import {Container}  from './App.styled';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onClick = (e) => {
    const option = e.target.textContent.toLowerCase();
    if (this.state.hasOwnProperty(option)) {
      return (this.setState((prev) => ({
        [option]: prev[option] + 1,
        })
      ))
    }
  }

  countTotalFeedback = () =>{
    const sum = Object.values(this.state);
    const total = sum.reduce((prev, next) => prev + next );
    return total;
  }

  countPositiveFeedbackPercentage = (total) => {
    const positivePercentage = this.state.good * 100 / total;
    return positivePercentage;
  }

  render() {
    const options = Object.keys(this.state);

  return (
    <Container >
      <Section title="Please, tell us about us)))"  primary>
        <FeedbackOptions
        options = {options}
        onLeaveFeedback={this.onClick}
      />
      </Section>
      
      <Section title="Statistics">
        <Notification mesage = 'No feedback given'/>
        <Statistics 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={0}
        positivePercentage={0}
        handleTotal={this.countTotalFeedback}
        onPosivePercent = {this.countPositiveFeedbackPercentage}
      />
      </Section>
    </Container>
  )
  }
}

export default App;
