import React from "react";
import PropTypes from 'prop-types';
import {Wrapper, Title} from './Section.styled';

export default function Section({ children, title, primary}) {
  return (
    <Wrapper>
      {title && <Title primary={primary}>{title}</Title>}
      {children}
    </Wrapper>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node,
}