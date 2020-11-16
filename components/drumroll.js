import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Drumroll = ({ setStage }) => (
  <Container>
    <h1>Ready to see which idea you should go with based on our fancy algorithm (don’t worry, it’s not actually an algorithm)?</h1>
    <p>Click the big SHOW ME button and let’s see the results…</p>
    <button onClick={() => setStage('results')}>Show me!</button>
  </Container>
)

export default Drumroll
