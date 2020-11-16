import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Pricing = () => (
  <Container>
    <h1>💰 What price were you thinking of charging for “A Course Teaching People Photoshop”?</h1>
    <p>Ex: $99 (you probably didn’t need this example 😉)</p>
    <input type='text' />
    <Link href='/drumroll'>
      <a>
        <button>Next</button>
      </a>
    </Link>
  </Container>
)

export default Pricing
