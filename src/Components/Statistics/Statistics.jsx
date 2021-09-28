import React from "react";
import PropTypes from 'prop-types';

import {FeedbackOptions, FeedbackItem, Counter, Percentage, Total} from './Statistics.styled';
  
export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <FeedbackOptions>
      <FeedbackItem>Good:<Counter>{good}</Counter></FeedbackItem>
      <FeedbackItem>Neutral: <Counter>{neutral}</Counter></FeedbackItem>
      <FeedbackItem>Bad:<Counter>{bad}</Counter></FeedbackItem>
      <FeedbackItem>Total:<Total>{total}</Total></FeedbackItem>
      <FeedbackItem>Positive feedback: <Percentage>{positivePercentage >= 0 ? positivePercentage : 0} %</Percentage></FeedbackItem>
    </FeedbackOptions>
  )
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  total: PropTypes.number,
  positivePercentage: PropTypes.number
}