import React, { Component } from 'react';
import styled from 'styled-components';

const StyledNavMenuToggler = styled.button`
  position: relative;

  display: block;

  border: none;
  padding: 0;
  width: 2.7rem;
  height: 1.9rem;

  cursor: pointer;
`;

const TogglerBar = styled.span`
  position: absolute;
  top: 50%;
  left: 0;

  display: block;

  border-radius: 4px;
  width: 2.7rem;
  height: 0.3rem;

  background-color: ${(props) =>
    props.navMenuToggled ? 'transparent' : '#000'};

  transform: translateY(-50%);

  transition: all 0.2s ease-in-out 0s;

  &::before {
    content: '';

    position: absolute;
    top: ${(props) => (props.navMenuToggled ? '0px' : '-8px')};
    left: 0;

    display: block;

    border-radius: 4px;
    width: 2.7rem;
    height: 0.3rem;

    background-color: #000;

    transform: ${(props) =>
      props.navMenuToggled ? 'rotate(45deg)' : 'rotate(0deg)'};

    transition: all 0.3s ease-in-out 0s;
  }

  &::after {
    content: '';

    position: absolute;
    bottom: ${(props) => (props.navMenuToggled ? '0px' : '-8px')};
    left: 0;

    display: block;

    border-radius: 4px;
    width: 2.7rem;
    height: 0.3rem;

    background-color: #000;

    transform: ${(props) =>
      props.navMenuToggled ? 'rotate(-45deg)' : 'rotate(0deg)'};

    transition: all 0.3s ease-in-out 0s;
  }
`;

export class NavMenuToggler extends Component {
  render() {
    return (
      <StyledNavMenuToggler onClick={this.props.handleNavMenuTogglerClick}>
        <TogglerBar navMenuToggled={this.props.navMenuToggled} />
      </StyledNavMenuToggler>
    );
  }
}

export default NavMenuToggler;
