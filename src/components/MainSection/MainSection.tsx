import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import SelectionAmountBtn from './SelectionAmountBtn'
import CartIcon from 'jsx:../../images/icon-cart.svg'
import Carousel from '../Carousel'
import CarouselOverlay from '../Carousel/CarouselOverlay'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cart/cartSlice'
import { PRODUCTS } from '../../data'
import { formatPrice } from '../../utils'
export default function MainSection() {
  const [open, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

  const { priceInCents, name, id } = PRODUCTS[0]
  const discountPercentage = 50
  const discountedPrice = (priceInCents * 50) / 100

  const addItem: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const productId = e.currentTarget.dataset.productId
    if (productId) {
      dispatch(addToCart({ productId, quantity }))
    }
  }

  return (
    <Container>
      <ImageSection>
        <Carousel triggerOverlay={() => setOpen(true)} />
      </ImageSection>
      <InfoSection>
        <StoreInfo>Sneaker Company</StoreInfo>
        <Title>Fall Limited Edition Sneakers</Title>
        <ItemInfo>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </ItemInfo>
        <PriceContainer>
          <CurrentPriceContainer>
            <CurrentPrice>{formatPrice(discountedPrice)}</CurrentPrice>
            <DiscountPercentage>50</DiscountPercentage>
          </CurrentPriceContainer>
          <OriginalPrice>{formatPrice(priceInCents)}</OriginalPrice>
        </PriceContainer>
        <ButtonContainer>
          <SelectionAmountBtn quantity={quantity} setQuantity={setQuantity} />
          <AddToCartBtn data-product-id={id} onClick={addItem}>
            <CartIcon />
            Add to cart
          </AddToCartBtn>
        </ButtonContainer>
      </InfoSection>
      <CarouselOverlay open={open} close={() => setOpen(false)} />
    </Container>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${QUERIES.desktopAndAbove} {
    flex-direction: row;
  }
`

const AddToCartBtn = styled.button`
  background-color: var(--color-orange-100);
  font-weight: 600;
  font-size: 1.125rem;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 10px;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg path {
    fill: white;
  }

  @media ${QUERIES.desktopAndAbove} {
    flex: 2;
  }
`

const CurrentPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const CurrentPrice = styled.span`
  &:before {
    content: '$';
  }
  font-size: 1.5rem;
  font-weight: 600;
`

const OriginalPrice = styled.span`
  &:before {
    content: '$';
  }
  text-decoration: line-through;
  color: var(--color-dark-blue-100);
  font-weight: 500;
`

const DiscountPercentage = styled.span`
  &:after {
    content: '%';
  }
  background-color: var(--color-orange-200);
  color: var(--color-orange-100);
  padding: 2px 6px;
  border-radius: 5px;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${QUERIES.desktopAndAbove} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`
const ImageSection = styled.div`
  min-height: 350px;

  @media ${QUERIES.desktopAndAbove} {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const InfoSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media ${QUERIES.desktopAndAbove} {
    padding: 70px 30px;
    flex: 1;
  }
`
const ItemInfo = styled.p`
  color: var(--color-dark-blue-200);
  font-size: 0.9rem;
  line-height: 1.8;
`

const Title = styled.h1`
  font-size: 2rem;
`

const StoreInfo = styled.h2`
  color: var(--color-orange-100);
  text-transform: uppercase;
  font-size: 0.75rem;
  /* margin: 0.5rem 0; */
  letter-spacing: 2px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.desktopAndAbove} {
    gap: 50px;
    flex-direction: row;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    padding-bottom: 200px;
  }
`
