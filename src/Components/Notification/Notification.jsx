import React from "react";
import PropTypes from 'prop-types';
import {Message} from './Notification.styled';

export default function Notification({message}) {
  return (
    <Message type='text'>{message}</Message>
  )
}

Notification.propTypes = {
  message: PropTypes.string,
}