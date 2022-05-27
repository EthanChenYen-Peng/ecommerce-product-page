import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import NextIcon from 'jsx:../../images/icon-next.svg'
import PreviousIcon from 'jsx:../../images/icon-previous.svg'
import { QUERIES } from '../../constants'

interface Props {
  images: string[]
  currentImageIndex: number
  setCurrentImageIndex: (arg: number) => void
  triggerOverlay?: () => void
  withNavBtns: boolean
}

function MainImage({
  images,
  currentImageIndex,
  setCurrentImageIndex,
  triggerOverlay,
  withNavBtns = false,
}: Props) {
  const [centerHeight, setCenterHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const displayNextBtn =
    centerHeight !== 0 && currentImageIndex < images.length - 1
  const displayPreviousBtn = centerHeight !== 0 && currentImageIndex > 0
  const displayPreviousBtnOnDesktop = displayPreviousBtn && withNavBtns
  const displayNextBtnOnDesktop = displayNextBtn && withNavBtns

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
      <ImageContainer
        onClick={triggerOverlay}
        currentImageIndex={currentImageIndex}
      >
        {images.map((product) => (
          <img src={product} key={product} />
        ))}
      </ImageContainer>
      <NextIconWrapper
        top={`${centerHeight}px`}
        displayBtn={displayNextBtn}
        displayBtnOnDesktop={displayNextBtnOnDesktop}
        onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
      >
        <NextIcon />
      </NextIconWrapper>
      <PreviousIconWrapper
        top={`${centerHeight}px`}
        displayBtn={displayPreviousBtn}
        displayBtnOnDesktop={displayPreviousBtnOnDesktop}
        onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
      >
        <PreviousIcon />
      </PreviousIconWrapper>
    </Container>
  )
}

export default MainImage

const Container = styled.div`
  position: relative;
`

const ImageContainer = styled.div<{ currentImageIndex: number }>`
  display: flex;
  overflow: hidden;
  img {
    object-fit: cover;
    max-height: 700px;
    width: 100%;
    display: block;
    transform: ${(props) =>
      `translateX(calc(-100% * ${props.currentImageIndex}))`};
    transition: transform 0.3s;
  }

  @media ${QUERIES.desktopAndAbove} {
    border-radius: 30px;
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

  @media ${QUERIES.desktopAndAbove} {
    height: 50px;
    width: 50px;
  }
`

const NextIconWrapper = styled(IconWrapper)<{
  displayBtn: boolean
  displayBtnOnDesktop: boolean
  top: string
}>`
  position: absolute;
  right: 1.25rem;
  display: ${(props) => (props.displayBtn ? 'block' : 'none')};
  opacity: ${(props) => (props.displayBtn ? 1 : 0)};
  transition: opacity 0.3s;
  top: ${(props) => props.top};
  transform: translateY(-50%);

  @media ${QUERIES.desktopAndAbove} {
    right: -1.5rem;
    display: ${(props) => (props.displayBtnOnDesktop ? 'block' : 'none')};
  }
`

const PreviousIconWrapper = styled(IconWrapper)<{
  displayBtn: boolean
  displayBtnOnDesktop: boolean
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

  @media ${QUERIES.desktopAndAbove} {
    left: -1.5rem;
    display: ${(props) => (props.displayBtnOnDesktop ? 'block' : 'none')};
  }
`
