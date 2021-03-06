import { useState } from 'react'
import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import Avatar from './Avatar'
import MobileMenu from './MobileMenu'
import CartQuantity from './CartQuantity'
import LogoIcon from 'jsx:../../images/logo.svg'
import MenuIcon from 'jsx:../../images/icon-menu.svg'
import CartItemList from './CartItemList'
import CartIcon from 'jsx:../../images/icon-cart.svg'
import avatarImg from '../../images/image-avatar.png'
export default function Header() {
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  return (
    <Nav>
      <Wrapper>
        <ToggleMenu onClick={() => setOpen(!open)}>
          <MenuIcon />
        </ToggleMenu>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
        <DesktopNav>
          <NavLink>Collections</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </DesktopNav>
      </Wrapper>
      <UserMenu>
        <CarBtn onClick={() => setCartOpen(!cartOpen)}>
          <CartQuantity />
          <CartIcon />
        </CarBtn>
        <Avatar image={avatarImg} />
      </UserMenu>
      <MobileMenu open={open} close={() => setOpen(false)} />
      <CartItemList open={cartOpen} />
    </Nav>
  )
}

const CarBtn = styled.button`
  position: relative;
  background-color: inherit;
  border: 0;

  svg {
    transform: scale(0.9);
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  position: relative;

  @media ${QUERIES.desktopAndAbove} {
    padding-left: 0;
    padding-right: 0;
    padding-top: 24px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--color-dark-blue-100);
    width: 70%;
    margin: 0 auto;
  }
`

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  @media ${QUERIES.desktopAndAbove} {
    gap: 40px;
  }
`

const DesktopNav = styled.ul`
  display: none;

  @media ${QUERIES.desktopAndAbove} {
    font-size: 0.75rem;
    display: flex;
    gap: clamp(1rem, 3vw, 4rem);
    align-items: top;
  }
`

const NavLink = styled.li`
  color: var(--color-dark-blue-200);
  list-style: none;
  cursor: pointer;
`

const LogoWrapper = styled.div`
  max-width: 100px;
  img {
    width: 100%;
    display: block;
  }
`

const ToggleMenu = styled.button`
  background-color: inherit;
  border: 0;
  img {
    display: block;
  }
  @media ${QUERIES.desktopAndAbove} {
    display: none;
  }
`

const UserMenu = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`
