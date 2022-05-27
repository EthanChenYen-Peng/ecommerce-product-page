import styled from 'styled-components/macro'
import React, { useState } from 'react'
import MainImage from './MainImage'
import ThumbnailGallery from './ThumbnailGallery'
import productOne from '../../images/image-product-1.jpg'
import productTwo from '../../images/image-product-2.jpg'
import productThree from '../../images/image-product-3.jpg'
import productFour from '../../images/image-product-4.jpg'

const productImages = [productOne, productTwo, productThree, productFour]

interface Props {
  triggerOverlay?: () => void
  withNavBtns?: boolean
}
function Carousel({ triggerOverlay, withNavBtns = false }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  return (
    <Container>
      <MainImage
        images={productImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
        triggerOverlay={triggerOverlay}
        withNavBtns={withNavBtns}
      />
      <ThumbnailGallery
        images={productImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </Container>
  )
}

export default Carousel

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
