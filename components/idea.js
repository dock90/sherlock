import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Idea = ({ setStage }) => (
  <Container>
    <h1>Question #1</h1>
    <h2>What is your offer idea?</h2>
    <input type='text' />
    <button onClick={() => setStage('scalability')}>Next...</button>
  </Container>
)

export default Idea
