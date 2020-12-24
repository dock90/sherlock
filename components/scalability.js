import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;

  p {
    margin: 0;
    color: ${props => props.theme.colors.dark2};
  }

  input {
    display: grid;
    margin: 2rem auto 0 auto;
    width: 60vw;
  }
`

const Labels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 2rem auto;
  width: 60vw;

  p:nth-child(1) {
    justify-self: start;
  }

  p:nth-child(2) {
    justify-self: end;
  }
`

const Scalability = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setStage
}) => {
  const [scalability, setScalability] = useState(5)

  const idea = ideaData[ideaPositionID].idea

  const handleScalabilityChange = () => {
    const { target: { value } } = event
    setScalability(value)
  }

  const storeScalability = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.scalability = scalability
      }
      return data
    })

    setIdeaData(currentData)
    setStage('interest')
  }

  return (
    <Container>
      <h1>Question #2</h1>
      <h2>Rate the Scalability/Sustainability of "{idea}" from 1-10.</h2>
      <p>1 = not a lot of revenue potential plus a high time investment</p>
      <p>10 = very scalable financially</p>
      <input
        min={1}
        max={10}
        onChange={handleScalabilityChange}
        step={1}
        type='range'
        value={scalability}
      />
      <Labels>
        <p>1</p>
        <p>10</p>
      </Labels>
      <button onClick={storeScalability}>Next</button>
    </Container>
  )
}

export default Scalability
