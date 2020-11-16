import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Results = () => (
  <Container>
    <h1>Offer Name!</h1>
    <h2>Total Score</h2>
    <h2>Your Score</h2>
    <h2># of Customers Needed</h2>
    <h2>Your Customers</h2>
    <div>
      <p>Idea</p>
      <p>Some Idea</p>
      <p>Total Score</p>
      <p>Some Score</p>
      <p># of Customers</p>
      <p>Some Customers</p>
    </div>
  </Container>
)

export default Results
