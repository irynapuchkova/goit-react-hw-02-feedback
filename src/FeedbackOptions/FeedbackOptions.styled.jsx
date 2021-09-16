import styled from "@emotion/styled";

export const BtnList = styled.div`
display: flex;
flex-direction: row;
`

export const Button = styled.button`
padding: 5px 10px;

width: 90px;
height: 35px;
margin-right: 10px;

border-radius: 5px;
cursor: pointer;

&:hover,
&:focus {
color: darkslateblue;
background-color: yellowgreen;
}
`