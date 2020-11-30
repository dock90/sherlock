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
    min-width: 600px;
  }
`

const Labels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto 2rem auto;
  width: 600px;

  p:nth-child(1) {
    justify-self: start;
  }

  p:nth-child(2) {
    justify-self: end;
  }
`

const Validation = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setStage
}) => {
  const [validation, setValidation] = useState(5)

  const idea = ideaData[ideaPositionID].idea

  const handleValidationChange = () => {
    const { target: { value } } = event
    setValidation(value)
  }

  const storeValidation = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.validation = validation
      }
      return data
    })

    setIdeaData(currentData)
    setStage('intermission')
  }

  return (
    <Container>
      <h1>Question #4</h1>
      <h2>Rate the Current Validation with YOUR audience of "{idea}" from 1-10.</h2>
      <p>1 = you have no idea if your audience needs or wants this</p>
      <p>10 = your audience has shown interest and willingness to pay</p>
      <input
        min={1}
        max={10}
        onChange={handleValidationChange}
        step={1}
        type='range'
        value={validation}
      />
      <Labels>
        <p>1</p>
        <p>10</p>
      </Labels>
      <button onClick={storeValidation}>Next</button>
    </Container>
  )
}

export default Validation
