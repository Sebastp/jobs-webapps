import React from 'react'
import styled from 'styled-components'

const labeledInput = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 20px;
`;

const LabeledInput = ({children, labelText, inputPlaceholder}) => (
  <labeledInput>
    <span className="labeledInput__label">{labelText}</span>
    <input className="labeledInput__input" placeholder={inputPlaceholder}/>
  </labeledInput>
)



export default LabeledInput
