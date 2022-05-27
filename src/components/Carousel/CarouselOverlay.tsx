import styled from 'styled-components/macro'
import { Dialog, DialogOverlay } from '@reach/dialog'
import Carousel from './Carousel'
interface Props {
  open: boolean
  close: () => void
}

function CarouselOverlay({ open, close }: Props) {
  return (
    <Overlay isOpen={open} onDismiss={close}>
      <StyledDialog area-label="Product images">
        <Carousel withNavBtns={true} />
      </StyledDialog>
    </Overlay>
  )
}

export default CarouselOverlay

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
  position: fixed;
  top: 50%;
  left: 50%;
  width: clamp(400px, 30%, 600px);
  transform: translate(-50%, -50%);
  &:focus {
    outline: none;
  }
`
