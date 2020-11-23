import styled from 'styled-components'

const Container = styled.div`
  text-align: center;

  button {
    margin: 2rem 1rem;
  }
`

const Intermission = ({ setStage }) => (
  <Container>
    <h1>ADD ANOTHER IDEA?</h1>
    <p>If you are trying to decide between multiple ideas, let’s have you add another idea to compare them.</p>
    <p>If you have just one idea, click the Skip and move on button.</p>
    <button onClick={() => setStage('idea')}>Add Another Idea!</button>
    <button onClick={() => setStage('numbers')}>Skip and Move On</button>
  </Container>
)

export default Intermission
