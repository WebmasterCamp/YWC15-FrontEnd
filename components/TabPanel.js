import React, { Component } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  color: ${props => props.active ? 'white' : '#ddd'};
  ${props => props.finished ? 'color: #85FFB8!important' : ''};
  border-left: 5px solid ${props => props.active ? 'white' : 'transparent'};
  margin-bottom: 15px;
  font-size: 24px;
  padding-left: 15px;
  padding-top: 7px;
  cursor: pointer;
  transition: 0.2s;
  font-family: 'Supermarket';
  
  & > i {
    font-size: 22px;
    margin-right: 10px;
    ${props => props.finished ? 'color: #85FFB8' : ''};
  }
  
  &:hover {
    color: white;
  }
`

export default class extends Component {
  render() {
    return (
      <div>
        <Item finished><i className="fa fa-check-circle"></i>1 - ข้อมูลส่วนตัว</Item>
        <Item active><i className="fa fa-circle"></i>2 - คำถามกลาง</Item>
        <Item><i className="fa fa-circle"></i>3 - คำถามสาขา</Item>
      </div>
    )
  }
}

