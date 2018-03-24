import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  color: ${props => props.active ? 'white' : '#ddd'};
  border-left: 5px solid ${props => props.active ? 'white' : 'transparent'};
  margin-bottom: 15px;
  font-size: 24px;
  padding-left: 15px;
  padding-top: 7px;
  cursor: pointer;
  transition: 0.2s;
  font-family: 'Supermarket';
  
  &:hover {
    color: white;
  }
`

export default class extends Component {
  render() {
    return (
      <div>
        <Item active>ข้อมูลส่วนตัว</Item>
        <Item>คำถามกลาง</Item>
        <Item>คำถามสาขา</Item>
      </div>
    )
  }
}

