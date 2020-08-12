import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from './NavItem';
import NavMenuIcon from './NavMenuIcon';
import { mediaQuaries as mQ } from '../mediaquaries';

const transition = 'color 0.2s ease-in-out 0s';

const StyledNavBar = styled.div`
  padding: 1.5rem;
  background-color: #f1f1f1;
`;

const Container = styled.div``;

const FlexContainer = styled.div``;

const Logo = styled.a`
  padding: 1rem;

  font-size: 2rem;
  letter-spacing: 2px;
  color: ${(props) => props.theme.tone_2};

  &:link,
  &:hover,
  &:active,
  &:visited {
    color: ${(props) => props.theme.tone_2};
  }

  @media ${mQ.mobile_Sm} {
    padding: 0.5rem 0.5rem 2rem;
    width: 100%;

    font-size: 1.5rem;
    text-align: center;
  }
`;

const NavMenu = styled.ul`
  padding-left: 7rem;

  @media ${mQ.mobile_Device} {
    padding-left: 0;
    width: 100%;
  }
`;

const IconsWrapper = styled.div`
  @media ${mQ.mobile_Device} {
    width: 100%;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  padding-left: 2rem;

  @media ${mQ.mobile_Sm} {
    padding: 0.5rem;
  }

  @media ${mQ.mobile_Device} {
    padding-left: 1.5rem;

    &:first-child {
      padding-left: 0.5rem;
    }
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;

  transition: ${transition};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.purpleColor};
  }

  @media ${mQ.mobile_Sm} {
    font-size: 1.5rem;
  }
`;

const ItemNumber = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme.purpleColor};

  color: #fff;

  transform: translate(45%, -35%);

  @media ${mQ.mobile_Sm} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNavBar>
        <Container className='container'>
          <FlexContainer className='d-flex align-items-center flex-wrap'>
            <Logo href='/'>
              <span className='d-inline-block font-weight-bold'>DIME</span>{' '}
              STORE
            </Logo>
            <NavMenu className='d-flex flex-column flex-md-row order-3 order-md-0 m-0 list-unstyled'>
              <NavItem transition={transition} />
            </NavMenu>
            <IconsWrapper
              style={{ fontSize: '1rem' }}
              className='d-flex align-items-center ml-0 ml-md-auto'
            >
              <Icon>
                <StyledFontAwesomeIcon icon={'search'} />
              </Icon>
              <Icon className='position-relative'>
                <StyledFontAwesomeIcon icon='shopping-cart' />
                <ItemNumber className='d-flex justify-content-center align-items-center font-weight-bold'>
                  0
                </ItemNumber>
              </Icon>
              <Icon className='position-relative'>
                <StyledFontAwesomeIcon icon={['far', 'heart']} />
                <ItemNumber className='d-flex justify-content-center align-items-center font-weight-bold'>
                  0
                </ItemNumber>
              </Icon>
              <Icon className='d-md-none ml-auto'>
                <NavMenuIcon />
              </Icon>
            </IconsWrapper>
          </FlexContainer>
        </Container>
      </StyledNavBar>
    );
  }
}

export default NavBar;
