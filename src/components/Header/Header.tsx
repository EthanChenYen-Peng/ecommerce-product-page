import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import Avatar from './Avatar'
import LogoIcon from 'jsx:../../images/logo.svg'
import MenuIcon from 'jsx:../../images/icon-menu.svg'
import CartIcon from 'jsx:../../images/icon-cart.svg'
import avatarImg from '../../images/image-avatar.png'
export default function Header() {
  return (
    <Nav>
      <Wrapper>
        <ToggleMenu>
          <MenuIcon />
        </ToggleMenu>
        <LogoWrapper>
          <LogoIcon />
        </LogoWrapper>
      </Wrapper>
      <UserMenu>
        <CartIcon />
        <Avatar image={avatarImg} />
      </UserMenu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 6px 4px;
`

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
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
`

const UserMenu = styled.div`
  display: flex;
  gap: 16px;
  margin-left: auto;
`
