import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  justify-self: start;
`

const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
`

const Header = ({
  restart
}) => {
  return (
    <Container>
      <Logo
        onClick={restart}
        src='/logo.png'
      />
    </Container>
  )
}

export default Header
