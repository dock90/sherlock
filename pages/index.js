import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Home = () => (
  <Container>
    <h1>Let's Identify Your Offer!</h1>
    <Link href='/idea'>
      <a>
        <button>I'm Ready...</button>
      </a>
    </Link>

    <p>Click The Button</p>
  </Container>
)

export default Home
