import styled from 'styled-components'

const Container = styled.div`
  padding: 4rem;
  text-align: center;

  @media screen and (max-width: 600px) {
    padding: 2rem;
  }
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

const Numbers = ({
  ideaData,
  setIdeaPositionID,
  setIdeaID,
  setStage
}) => {
  const switchFlows = () => {
    const newID = 0
    setIdeaPositionID(newID)
    const id = ideaData[newID].id
    setIdeaID(id)
    setStage('revenue-goal')
  }

  return (
    <Container>
      <h1>Great, we have all your ideas! Now let’s run the numbers…</h1>
      <Details>Sometimes it really helps to choose a revenue goal for this new offer and see how many sales or clients it will take to get to your goal. This may help you realize that some of your ideas will be more difficult to generate revenue than others.</Details>
      <button onClick={switchFlows}>Lets do this!</button>
      <Hint>Psst! Click the button</Hint>
    </Container>
  )
}

export default Numbers
