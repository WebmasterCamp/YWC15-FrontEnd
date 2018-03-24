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

const Heading = styled.h1`
  font-family: 'Supermarket';
  margin: 20px 0;
  font-size: 40px;
`;

export default ({ children, heading }) => (
  <Container>
    { heading !== undefined && <Heading>{ heading }</Heading>}
    { children }
  </Container>
);
