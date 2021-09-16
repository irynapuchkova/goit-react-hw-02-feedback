import React from "react";
import PropTypes from 'prop-types';
import {BtnList, Button} from './FeedbackOptions.styled';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  console.log(options);
  
  return (
    <BtnList>

          <Button
            type='button' onClick={onLeaveFeedback}
            >Good
          </Button>
          <Button
            type='button' onClick={onLeaveFeedback}
            >Neutral
          </Button>
          <Button
            type='button' onClick={onLeaveFeedback}
           >Bad
          </Button>
    </BtnList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
}