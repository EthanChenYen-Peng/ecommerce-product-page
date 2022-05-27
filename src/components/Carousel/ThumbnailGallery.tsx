import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
interface Props {
  images: string[]
  currentImageIndex: number
  setCurrentImageIndex: (arg: number) => void
}
function ThumbnailGallery({
  images,
  currentImageIndex,
  setCurrentImageIndex,
}: Props) {
  return (
    <Container>
      {images.map((image, index) => (
        <ImageContainer
          key={index}
          selected={index === currentImageIndex}
          onClick={() => setCurrentImageIndex(index)}
        >
          <img src={image} />
        </ImageContainer>
      ))}
    </Container>
  )
}

export default ThumbnailGallery

const Container = styled.div`
  display: none;
  @media ${QUERIES.desktopAndAbove} {
    display: flex;
    gap: 1.5rem;
  }
`

const ImageContainer = styled.div<{ selected: boolean }>`
  flex: 1;
  border-radius: 25px;
  cursor: pointer;
  border: ${(props) =>
    props.selected ? 'solid 2px var(--color-orange-100)' : ''};
  img {
    display: block;
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    object-position: center center;
    border-radius: 20px;
    transition: filter 0.5s;
    filter: ${(props) => (props.selected ? 'opacity(0.4)' : '')};
  }
  img:hover {
    filter: opacity(0.4);
  }
`
