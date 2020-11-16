import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Numbers = ({ setStage }) => (
  <Container>
    <h1>Great, we have all your ideas! Now let’s run the numbers…</h1>
    <p>Sometimes it really helps to choose a revenue goal for this new offer and see how many sales or clients it will take to get to your goal. This may help you realize that some of your ideas will be more difficult to generate revenue than others. </p>
    <button onClick={() => setStage('revenue-goal')}>Lets do this!</button>
    <p>Click The Button</p>
  </Container>
)

export default Numbers
