import 'index.css';
import React from "react";
import PropTypes from 'prop-types';

import { FeedbackOptions, FeedbackItem, Counter, Percentage, Total} from './Statistics.styled';
  
export default function Statistics({ good, neutral, bad, handleTotal, onPosivePercent }) {
  const total = handleTotal();
  const positivePercentage = Number.parseInt(onPosivePercent(total));
  const notification = "No feedback given";
  
  if (total === 0) {
    return notification;
  } 
  return (
    <FeedbackOptions>
        
      <FeedbackItem>Good:
        <Counter>{good}</Counter></FeedbackItem>
      <FeedbackItem>Neutral:
        <Counter>{neutral}</Counter></FeedbackItem>
      <FeedbackItem>Bad:
        <Counter>{bad}</Counter></FeedbackItem>
        
      <FeedbackItem>Total: 
        <Total>{total}
        </Total>
      </FeedbackItem>
        
      <FeedbackItem>Positive feedback: 
        <Percentage>
          {positivePercentage >= 0
            ? positivePercentage
            : 0} %
        </Percentage>
      </FeedbackItem>
    </FeedbackOptions>
  )
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }),
  handleTotal: PropTypes.func.isRequired,
  onPosivePercent: PropTypes.func.isRequired,
}