import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const RevenueGoal = ({ setStage }) => (
  <Container>
    <h1>What is your annual Total Revenue Goal 💰 for this idea?</h1>
    <p>Ex: $20,000 means you would want this idea to generate $20,000 in the next 12 months. That could be with multiple launches or an evergreen sales funnel.</p>
    <input type='text' />
    <button onClick={() => setStage('pricing')}>Next</button>
  </Container>
)

export default RevenueGoal
