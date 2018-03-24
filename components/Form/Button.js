import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  background: ${props => props.bgcolor};
  border: 0;
  color: white;
  font-family: 'Supermarket';
  padding: 10px 15px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
`;

export default ({ children, bgcolor = "#4D4940" }) => (
  <ButtonContainer bgcolor={bgcolor}>
    { children }
  </ButtonContainer>
)
