import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  padding: 0 2rem;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
`

const Header = () => {
  return (
    <Container>
      <Logo src='/logo.png' />
    </Container>
  )
}

export default Header
