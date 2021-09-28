import 'normalize.css';

import { Component } from 'react';

import Section from 'Components/Section ';
import Statistics from 'Components/Statistics';
import FeedbackOptions from 'Components/FeedbackOptions';
import Notification from 'Components/Notification';
import {Container} from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onClick = (e) => {
    const option = e.target.textContent.toLowerCase();
    return (this.setState((prev) => ({
      [option]: prev[option] + 1,})))
  }

  countTotalFeedback = () =>{
    const sum = Object.values(this.state);
    const total = sum.reduce((prev, next) => prev + next );
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positivePercentage = this.state.good * 100 / total;
    const parsedPositivePercentage = Number.parseInt(positivePercentage);
    return parsedPositivePercentage;
  }

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
    <Container >
      <Section title="Please, tell us about us)))" primary>
        <FeedbackOptions options={options} onLeaveFeedback={this.onClick}/>
      </Section>
      <Section title="Statistics">
        {total === 0 && <Notification message='No feedback given'/>}
        {total !== 0 && <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage}/>}
      </Section>
    </Container>
    )
  }
}