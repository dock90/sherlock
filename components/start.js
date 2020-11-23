import styled from 'styled-components'

// styles
const Container = styled.div`
  text-align: center;

  p {
    font-style: italic;
    margin: 0.5rem 0;
    color: #bfbfbf;
  }
`

// TODO: add jason and caroline in bottom left corner w / brought to you by waim text

const Start = ({ setStage }) => (
  <Container>
    <h1>Let's Identify Your Offer!</h1>
    <button onClick={() => setStage('idea')}>I'm Ready</button>
    <p>Psst! Click the button</p>
  </Container>
)

export default Start
