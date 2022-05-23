import styled from 'styled-components/macro'
import { QUERIES } from './constants'
export default function App() {
  return (
    <div>
      <Heading>Hello from React</Heading>
    </div>
  )
}

const Heading = styled.h1`
  color: #fff;

  @media ${QUERIES.desktopAndAbove} {
    color: blue;
  }
`
