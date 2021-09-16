import 'normalize.css';
import './App.styled';

import { Component } from 'react';

import Section from '../Section /Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';


class App extends Component {

  static propTypes = {
  // 
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  
  onClick = (e) => {
    const value = e.target.textContent.toLowerCase();
    if (this.state.hasOwnProperty(value)) {
      return (this.setState((prev) => ({
        [value]: prev[value] + 1,
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
    console.log(positivePercentage);
    return positivePercentage;
  }

  render() {
  return (
    <Container >
      <Section title="Please, tell us about us"  primary>
        <FeedbackOptions
        options={this.state}
        onLeaveFeedback={this.onClick}
      />
      </Section>
      
      <Section title = "Statistics">
        <Statistics
        good={0}
        neutral={0}
        bad={0}
        total={0}
        positivePercentage={0}
        options={this.state}
        onTotal={this.countTotalFeedback}
        onPosivePercent = {this.countPositiveFeedbackPercentage}
      />
      </Section>
    </Container>
  )
  }
}

export default App;
