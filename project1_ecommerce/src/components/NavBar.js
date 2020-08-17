import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavItem from './NavItem';
import NavMenuToggler from './NavMenuToggler';
import { mediaQuaries as mQ } from '../mediaquaries';

const transition = 'color 0.2s ease-in-out 0s';

const StyledNavBar = styled.div`
  background-color: #f1f1f1;
`;

const Container = styled.div`
  @media ${mQ.mobile_Md} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const FlexContainer = styled.div``;

const LogoWrapper = styled.div`
  @media ${mQ.mobile_Md} {
    padding: 2rem 1.5rem 1rem;
    width: 100%;

    text-align: center;
  }
`;

const Logo = styled.a`
  font-size: 2rem;
  letter-spacing: 2px;
  color: ${(props) => props.theme.tone_2};

  &:hover {
    color: ${(props) => props.theme.tone_2};
  }

  @media ${mQ.mobile_Md} {
    font-size: 1.8rem;
  }
`;

const NavMenu = styled.ul`
  margin-left: 7rem;

  transition: all 0.4s ease-in-out 0s;

  @media ${mQ.mobile_Md} {
    overflow: ${(props) => (props.navMenuToggled ? 'visible' : 'hidden')};
    height: ${(props) => (props.navMenuToggled ? '300px' : '0px')};

    background-color: ${(props) => props.theme.purpleColor};
  }

  @media ${mQ.mobile_Device} {
    margin-left: 0;

    width: 100%;
  }
`;

const NavBarIconContainer = styled.div`
  font-size: 1rem;

  @media ${mQ.mobile_Md} {
    padding: 1rem 1.5rem 2rem;
    width: 100%;
    height: 6.5rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 2rem;
  padding-right: 1.5rem;

  @media ${mQ.mobile_Md} {
    &:first-child {
      padding-left: 0rem;
    }

    &:last-child {
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }

  @media ${mQ.mobile_Lg} {
    &:last-child {
      padding-left: 4rem;
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

  @media ${mQ.mobile_Md} {
    font-size: 1.8rem;
  }
`;

const NavMenuTogglerWrapper = styled(IconWrapper)``;

const ItemNumber = styled.div`
  position: absolute;
  top: -15px;
  right: 0;

  width: 2rem;
  height: 2rem;

  background-color: ${(props) => props.theme.purpleColor};

  color: #fff;

  @media ${mQ.mobile_Md} {
    top: -10px;
    right: 3px;

    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ItemsInCartNumber = styled(ItemNumber)``;
const ItemsInWishListNumber = styled(ItemNumber)``;

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navMenuToggled: false,
    };
  }

  handleNavMenuTogglerClick = () => {
    this.setState({
      navMenuToggled: !this.state.navMenuToggled,
    });
  };

  render() {
    return (
      <StyledNavBar>
        <Container className='container'>
          <FlexContainer className='d-flex align-items-center flex-wrap'>
            <LogoWrapper>
              <Logo href='/'>
                <span className='d-inline-block font-weight-bold'>DIME</span>{' '}
                STORE
              </Logo>
            </LogoWrapper>

            <NavMenu
              navMenuToggled={this.state.navMenuToggled}
              className='d-flex flex-column flex-md-row order-3 order-md-0 list-unstyled'
            >
              <NavItem
                navMenuToggled={this.state.navMenuToggled}
                transition={transition}
              />
            </NavMenu>
            <NavBarIconContainer className='d-flex align-items-center ml-sm-auto'>
              <IconWrapper>
                <StyledFontAwesomeIcon icon={'search'} />
              </IconWrapper>
              <IconWrapper className='position-relative'>
                <StyledFontAwesomeIcon icon='shopping-cart' />
                <ItemsInCartNumber className='d-flex justify-content-center align-items-center font-weight-bold'>
                  0
                </ItemsInCartNumber>
              </IconWrapper>
              <IconWrapper className='position-relative'>
                <StyledFontAwesomeIcon icon={['far', 'heart']} />
                <ItemsInWishListNumber className='d-flex justify-content-center align-items-center font-weight-bold'>
                  0
                </ItemsInWishListNumber>
              </IconWrapper>
              <NavMenuTogglerWrapper className='d-md-none ml-auto'>
                <NavMenuToggler
                  navMenuToggled={this.state.navMenuToggled}
                  handleNavMenuTogglerClick={this.handleNavMenuTogglerClick}
                />
              </NavMenuTogglerWrapper>
            </NavBarIconContainer>
          </FlexContainer>
        </Container>
      </StyledNavBar>
    );
  }
}

export default NavBar;
