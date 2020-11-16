import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Interest = () => (
  <Container>
    <h1>Question #3</h1>
    <h2>Rate the Interest/Enjoyment of “YOUR IDEA HERE” from 1-10.</h2>
    <p>le fancy picker slider goes here</p>
    <p>1 = not very interesting to you</p>
    <p>10 = very enjoyable and exciting</p>
    <Link href='/validation'>
      <a>
        <button>Next</button>
      </a>
    </Link>
  </Container>
)

export default Interest
