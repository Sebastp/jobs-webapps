import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: white;
  background: black;
  padding: 10px 70px;
`;

const FullButton = ({children, clickFunct}) => (
  <Button onClick={clickFunct}>
    {children}
  </Button>
)



export default FullButton
