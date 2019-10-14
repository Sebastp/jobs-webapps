import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: white;
  background: black;
  padding: 10px 70px;
`;

const LabeledInput = ({children, labelText, inputPlaceholder}) => (
  <div className="labeledInput">
    <span className="labeledInput__label">{labelText}</span>
    <input className="labeledInput__input" placeholder={inputPlaceholder}/>
  </div>
)



export default LabeledInput
