import styled from 'styled-components/macro'
import productOne from '../../images/image-product-1-thumbnail.jpg'
import DeleteIcon from 'jsx:../../images/icon-delete.svg'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { formatPrice } from '../../utils'
import { removeFromCart } from '../../features/cart/cartSlice'

function CartItemList({ open }: { open: boolean }) {
  const dispatch = useAppDispatch()
  const items = Object.entries(useAppSelector((state) => state.cart.items))
  const deleteProduct = (productId: string) => {
    dispatch(removeFromCart({ productId }))
  }
  const disableBtn = items.length === 0
  return (
    <Container open={open}>
      <Header>Cart</Header>
      <ItemContainer>
        {items.map(([productId, { name, priceInCents, quantity }]) => (
          <>
            <ItemImageContainer>
              <img src={productOne} />
            </ItemImageContainer>
            <ItemInfo>
              <ItemName>{name}</ItemName>
              <PriceContainer>
                ${formatPrice(priceInCents)} x {quantity}
                <TotalPrice>${formatPrice(priceInCents * quantity)}</TotalPrice>
              </PriceContainer>
            </ItemInfo>
            <DeleteButtonContainer onClick={() => deleteProduct(productId)}>
              <DeleteIcon />
            </DeleteButtonContainer>
          </>
        ))}
      </ItemContainer>
      <ButtonContainer>
        <CheckOutBtn disableBtn={disableBtn}>Checkout</CheckOutBtn>
      </ButtonContainer>
    </Container>
  )
}

export default CartItemList

const DeleteButtonContainer = styled.div`
  margin-left: auto;
  /* Bigger pressing area */
  padding: 1rem;
  transform: translateX(1rem);
  cursor: pointer;
`
const ButtonContainer = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
`

const ItemName = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
`

const CheckOutBtn = styled.button<{ disableBtn: boolean }>`
  background-color: ${(props) =>
    props.disableBtn
      ? 'var(--color-dark-blue-100)'
      : 'var(--color-orange-100)'};
  font-weight: 500;
  font-size: 1.125rem;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.disableBtn ? '' : 'pointer')};
  width: 100%;
`
const PriceContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
const TotalPrice = styled.span`
  font-weight: 600;
  color: black;
`
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  gap: 1rem;
`

const ItemImageContainer = styled.div`
  width: 50px;

  img {
    border-radius: 5px;
    width: 100%;
  }
`

const ItemInfo = styled.div`
  color: var(--color-dark-blue-200);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const Header = styled.div`
  border-bottom: 1px solid var(--color-dark-blue-100);
  font-weight: 600;
  padding: 2rem;
`

const Container = styled.div<{ open: boolean }>`
  opacity: ${(props) => (props.open ? '1' : '0')};
  transform: ${(props) => (props.open ? 'translateY(0%)' : 'translateY(30px)')};
  transition: transform 0.5s, opacity 0.3s;
  pointer-events: ${(props) => (props.open ? '' : 'none')};
  position: absolute;
  width: 95%;
  max-width: 400px;
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  top: 60px;
  right: 10px;
  z-index: 2;
  box-shadow: 0px 5px 8px -6px #000000;
`
