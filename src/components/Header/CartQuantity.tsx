import styled from 'styled-components/macro'
import { useAppSelector } from '../../redux/hook'
function CartQuantity() {
  const { items } = useAppSelector((state) => state.cart)
  const total = calculateTotalItems(items)
  const toShow = total > 0

  return <Container toShow={toShow}>{total}</Container>
}

function calculateTotalItems(items: { [key: string]: number }) {
  let total = 0
  for (const [, value] of Object.entries(items)) {
    total += value
  }
  return total
}

export default CartQuantity

const Container = styled.span<{ toShow: boolean }>`
  background-color: var(--color-orange-100);
  display: ${(props) => (props.toShow ? 'block' : 'none')};
  padding: 2px 7px;
  border-radius: 10px;
  color: white;
  font-size: 10px;
  position: absolute;
  top: -5px;
  right: -5px;
  z-index: 2;
`
