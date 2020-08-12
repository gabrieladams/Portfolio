import React from 'react';
import styled from 'styled-components';
import { mediaQuaries as mQ } from '../mediaquaries';

const NavLink = styled.a`
  color: ${(props) => props.theme.tone_2};
  transition: ${(props) => props.transition};

  &:link,
  &:visited {
    color: ${(props) => props.theme.tone_2};
  }

  &:hover,
  &:active {
    color: ${(props) => props.theme.purpleColor};
  }
`;

const StyledNavItem = styled.li`
  padding: 1rem;

  &:hover ${NavLink} {
    color: ${(props) => props.theme.purpleColor};
  }

  @media ${mQ.mobile_Device} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

function NavItem(props) {
  const navLinks = ['Home', 'Shop', 'About', 'Contact'];
  return (
    <React.Fragment>
      {navLinks.map((navLink) => (
        <StyledNavItem>
          <NavLink
            key={navLink}
            transition={props.transition}
            href='/'
            className='d-block'
          >
            {navLink}
          </NavLink>
        </StyledNavItem>
      ))}
    </React.Fragment>
  );
}

export default NavItem;
