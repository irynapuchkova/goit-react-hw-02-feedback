import React from "react";
import PropTypes from 'prop-types';
import {BtnList, Button} from './FeedbackOptions.styled';

export default function FeedbackOptions({options, onLeaveFeedback}) {
 
  return (
    <BtnList>
      {options.map((option) =>
      {return (
        <Button key={option} type='button' bgColor = {option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      )})}
    </BtnList>
  )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired)
}