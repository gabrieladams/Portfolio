import React from 'react';
import styled from 'styled-components';
import { mediaQuaries as mQ } from '../mediaquaries';

const NavLink = styled.a`
  color: ${(props) => props.theme.tone_2};
  transition: ${(props) => props.transition};

  &:hover {
    color: ${(props) => props.theme.purpleColor};
  }

  @media ${mQ.mobile_Md} {
    color: #fff;
  }
`;

const StyledNavItem = styled.li`
  margin: 0rem 1rem;
  padding: 2rem 1rem;

  transition: opacity 0.1s ease-in-out 0.3s;

  &:hover ${NavLink} {
    color: ${(props) => props.theme.purpleColor};
  }

  @media ${mQ.mobile_Md} {
    opacity: ${(props) => (props.navMenuToggled ? '1' : '0')};
    margin: 0rem;
    padding: 1rem 1.5rem;
  }
`;

function NavItem(props) {
  const navLinks = ['Home', 'Shop', 'About', 'Contact'];
  return (
    <React.Fragment>
      {navLinks.map((navLink) => (
        <StyledNavItem navMenuToggled={props.navMenuToggled}>
          <NavLink
            key={navLink}
            navMenuToggled={props.navMenuToggled}
            transition={props.transition}
            href='/'
          >
            {navLink}
          </NavLink>
        </StyledNavItem>
      ))}
    </React.Fragment>
  );
}

export default NavItem;
