import styled from 'styled-components/macro'
import PlusIcon from 'jsx:../../images/icon-plus.svg'
import MinusIcon from 'jsx:../../images/icon-minus.svg'

function SelectionAmountBtn() {
  return (
    <Container>
      <StyledBtn>
        <MinusIcon />
      </StyledBtn>
      0
      <StyledBtn>
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
`

const StyledBtn = styled.button`
  background-color: inherit;
  border: none;
`
