import styled from 'styled-components/macro'
import { ItemPayload } from '../../features/cart/cartSlice'
import { useAppSelector } from '../../redux/hook'
function CartQuantity() {
  const { items } = useAppSelector((state) => state.cart)
  const total = calculateTotalItems(Object.values(items))
  const toShow = total > 0

  return <Container toShow={toShow}>{total}</Container>
}

function calculateTotalItems(items: ItemPayload[]) {
  let total = 0
  for (const item of items) {
    total += item.quantity
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
