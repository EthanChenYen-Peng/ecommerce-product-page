import styled from 'styled-components/macro'
import { Dialog, DialogOverlay } from '@reach/dialog'
import CloseIcon from 'jsx:../../images/icon-close.svg'

interface Props {
  open: boolean
  close: () => void
}
function MobileMenu({ open, close }: Props) {
  return (
    <Overlay isOpen={open} onDismiss={close}>
      <StyledDialog>
        <CloseIconWrapper onClick={close}>
          <CloseIcon />
        </CloseIconWrapper>
        <Spacer />
        <MobileNav>
          <NavLink>Collections</NavLink>
          <NavLink>Men</NavLink>
          <NavLink>Women</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </MobileNav>
      </StyledDialog>
    </Overlay>
  )
}

const Spacer = styled.div`
  height: 50px;
`
const MobileNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-left: 12px;
  cursor: pointer;
`

const NavLink = styled.li`
  font-weight: 700;
  font-size: 1.125rem;
  list-style: none;
`

const CloseIconWrapper = styled.button`
  background: inherit;
  border: none;
  margin-top: 12px;
  margin-left: 8px;
`

const Overlay = styled(DialogOverlay)`
  background-color: black;
  opacity: 0.7;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const StyledDialog = styled(Dialog)`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 65%;
`

export default MobileMenu
