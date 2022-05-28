import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import PlusIcon from 'jsx:../../images/icon-plus.svg'
import MinusIcon from 'jsx:../../images/icon-minus.svg'

interface Props {
  quantity: number
  setQuantity: (n: number) => void
}
function SelectionAmountBtn({ quantity, setQuantity }: Props) {
  const increment = () => {
    setQuantity(quantity + 1)
  }

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }
  return (
    <Container>
      <StyledBtn onClick={decrement}>
        <MinusIcon />
      </StyledBtn>
      {quantity}
      <StyledBtn onClick={increment}>
        <PlusIcon />
      </StyledBtn>
    </Container>
  )
}

export default SelectionAmountBtn

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-dark-blue-50);
  border-radius: 10px;

  @media ${QUERIES.desktopAndAbove} {
    flex: 1;
  }
`

const StyledBtn = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
`
