import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Scalability = () => (
  <Container>
    <h1>Question #2</h1>
    <h2>Rate the Scalability/Sustainability of “YOUR IDEA HERE” from 1-10.</h2>
    <p>le fancy picker slider goes here</p>
    <p>1 = not a lot of revenue potential plus a high time investment</p>
    <p>10 = very scalable financially</p>
    <Link href='/interest'>
      <a>
        <button>Next</button>
      </a>
    </Link>
  </Container>
)

export default Scalability
