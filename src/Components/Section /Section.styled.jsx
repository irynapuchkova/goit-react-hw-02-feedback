import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 500px;
`
export const Title = styled.h2`
  font-size: 36px;
  color: ${(props) => props.primary ? 'darkslateblue' : 'darkred'}; 
`