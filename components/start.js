import styled from 'styled-components'

// styles
const Container = styled.div``

const Start = ({ setStage }) => (
  <Container>
    <h1>Let's Identify Your Offer!</h1>
    <button onClick={() => setStage('idea')}>I'm Ready...</button>
    <p>Click The Button</p>
  </Container>
)

export default Start
