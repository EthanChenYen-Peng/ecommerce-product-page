import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import Avatar from './Avatar'
import logoImg from '../../images/logo.svg'
import menuIcon from '../../images/icon-menu.svg'
import cartIcon from '../../images/icon-cart.svg'
import avatarImg from '../../images/image-avatar.png'
export default function Header() {
  return (
    <Nav>
      <Wrapper>
        <ToggleMenu>
          <img src={menuIcon} />
        </ToggleMenu>
        <LogoWrapper>
          <img src={logoImg} />
        </LogoWrapper>
      </Wrapper>
      <UserMenu>
        <img src={cartIcon} />
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
