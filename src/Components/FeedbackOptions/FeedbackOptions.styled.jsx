import styled from "@emotion/styled";

export const BtnList = styled.div`
display: flex;
flex-direction: row;
`

export const Button = styled.button`
padding: 5px 10px;
margin-right: 10px;

width: 90px;
height: 35px;

text-transform: capitalize;

border-radius: 5px;
cursor: pointer;

  &:hover,
  &:focus {
  color: darkslateblue;
  border: none;
  background-color: ${props => {
      switch (props.bgColor) {
        case "good":
          return 'yellowgreen';
        case "neutral":
          return 'yellow';
        case "bad":
          return 'lightblue';
        default:
          return 'grey';
      }}
    }
  }
` 