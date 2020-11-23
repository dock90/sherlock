import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Details = styled.p`
  max-width: 800px;
  margin: 2rem auto;
`

const Hint = styled.p`
  font-style: italic;
  margin: 0.5rem 0;
  color: #bfbfbf;
`

const Numbers = ({ setStage }) => (
  <Container>
    <h1>Great, we have all your ideas! Now let’s run the numbers…</h1>
    <Details>Sometimes it really helps to choose a revenue goal for this new offer and see how many sales or clients it will take to get to your goal. This may help you realize that some of your ideas will be more difficult to generate revenue than others.</Details>
    <button onClick={() => setStage('revenue-goal')}>Lets do this!</button>
    <Hint>Psst! Click the button</Hint>
  </Container>
)

export default Numbers
