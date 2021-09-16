import styled from "@emotion/styled";

export const Wrapper = styled.div`
width: 500px;
/* background-color: green; */
`

export const Title = styled.h2`
font-size: 40px;
color: ${(props) => props.primary ? 'darkslateblue' : 'darkred'}; 
`