import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Idea = () => (
  <Container>
    <h1>Question #1</h1>
    <h2>What is your offer idea?</h2>
    <input type='text' />
    <Link href='/scalability'>
      <a>
        <button>Next...</button>
      </a>
    </Link>
  </Container>
)

export default Idea
