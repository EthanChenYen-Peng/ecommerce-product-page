import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'

export default function MainSection() {
  return (
    <Container>
      <ImageSection>
        <p>Image</p>
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
          <CurrentPrice>125.00</CurrentPrice>
          <DiscountPercentage>50</DiscountPercentage>
          <OriginalPrice>250</OriginalPrice>
        </PriceContainer>
      </InfoSection>
    </Container>
  )
}

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
  margin-left: auto;
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
  gap: 1rem;
`
const ImageSection = styled.div`
  min-height: 350px;
  background-color: blue;
`

const InfoSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
`
