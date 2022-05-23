import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
interface Props {
  image: string
}
function Avatar({ image }: Props) {
  return (
    <ImageWrapper>
      <img src={image} />
    </ImageWrapper>
  )
}

export default Avatar

const ImageWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
  @media ${QUERIES.desktopAndAbove} {
    width: 32px;
    height: 32px;
  }
`
