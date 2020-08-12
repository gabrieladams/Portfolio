import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavMenuIcon = styled.div`
  width: 3rem;
`;

const IconBar = styled.div`
  border-radius: 2px;
  height: 0.4rem;

  background-color: #000;
`;

const Spacer = styled.div`
  height: 0.5rem;

  background-color: #fff;
`;

export class NavMenuIcon extends Component {
  render() {
    return (
      <StyledNavMenuIcon>
        <IconBar />
        <Spacer />
        <IconBar />
        <Spacer />
        <IconBar />
      </StyledNavMenuIcon>
    );
  }
}

export default NavMenuIcon;
