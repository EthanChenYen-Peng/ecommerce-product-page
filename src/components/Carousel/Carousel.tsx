import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import productOne from '../../images/image-product-1.jpg'
import productTwo from '../../images/image-product-2.jpg'
import productThree from '../../images/image-product-3.jpg'
import productFour from '../../images/image-product-4.jpg'
import NextIcon from 'jsx:../../images/icon-next.svg'
import PreviousIcon from 'jsx:../../images/icon-previous.svg'

const productImages = [productOne, productTwo, productThree, productFour]
function Carousel() {
  const [centerHeight, setCenterHeight] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const displayNextBtn =
    centerHeight !== 0 && currentImageIndex < productImages.length - 1
  const displayPreviousBtn = centerHeight !== 0 && currentImageIndex > 0

  React.useEffect(() => {
    setTimeout(() => {
      const rect = containerRef.current?.getClientRects()
      if (rect) {
        const height = rect[0].height
        setCenterHeight(Math.floor(height / 2))
      }
    }, 100)
  }, [])

  return (
    <Container ref={containerRef}>
      <ImageContainer currentImageIndex={currentImageIndex}>
        {productImages.map((product) => (
          <img src={product} key={product} />
        ))}
      </ImageContainer>
      <NextIconWrapper
        top={`${centerHeight}px`}
        displayBtn={displayNextBtn}
        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
      >
        <NextIcon />
      </NextIconWrapper>
      <PreviousIconWrapper
        top={`${centerHeight}px`}
        displayBtn={displayPreviousBtn}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        <PreviousIcon />
      </PreviousIconWrapper>
    </Container>
  )
}

export default Carousel

const Container = styled.div`
  position: relative;
`

const ImageContainer = styled.div<{ currentImageIndex: number }>`
  display: flex;
  overflow: hidden;
  img {
    object-fit: cover;
    max-height: 600px;
    width: 100%;
    display: block;
    transform: ${(props) =>
      `translateX(calc(-100% * ${props.currentImageIndex}))`};
    transition: transform 0.3s;
  }
`

const IconWrapper = styled.button`
  background-color: var(--color-dark-blue-50);
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NextIconWrapper = styled(IconWrapper)<{
  displayBtn: boolean
  top: string
}>`
  position: absolute;
  right: 1.25rem;
  display: ${(props) => (props.displayBtn ? 'block' : 'none')};
  opacity: ${(props) => (props.displayBtn ? 1 : 0)};
  transition: opacity 0.3s;
  top: ${(props) => props.top};
  transform: translateY(-50%);
`

const PreviousIconWrapper = styled(IconWrapper)<{
  displayBtn: boolean
  top: string
}>`
  position: absolute;
  left: 1.25rem;
  display: ${(props) => (props.displayBtn ? 'block' : 'none')};
  opacity: ${(props) => (props.displayBtn ? 1 : 0)};
  transition: opacity 0.3s;
  top: ${(props) => props.top};
  transform: translateY(-50%);
  svg {
    transform: translateX(-1px);
  }
`
