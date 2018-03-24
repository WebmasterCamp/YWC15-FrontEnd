import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 20px;
  
  border: 5px solid #BFB49D;
  background: #EEEAE6;
`;

export default ({ children }) => (
  <Container>
    { children }
  </Container>
);
