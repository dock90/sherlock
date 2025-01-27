import styled from 'styled-components'

// styles
const Container = styled.div`
  padding: 4rem;
  text-align: center;
`

const Hint = styled.p`
  font-style: italic;
  margin: 0.5rem 0;
  color: #bfbfbf;
`

const Start = ({ setStage }) => (
  <Container>
    <h1>Let's Identify Your Offer!</h1>
    <button onClick={() => setStage('idea')}>I'm Ready</button>
    <Hint>Psst! Click the button</Hint>
  </Container>
)

export default Start
