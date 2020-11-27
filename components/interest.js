import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;

  input {
    display: grid;
    margin: 2rem auto;
    min-width: 400px;
  }
`

const Interest = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setStage
}) => {
  const [interest, setInterest] = useState(50)

  const idea = ideaData[ideaPositionID].idea

  const handleInterestChange = () => {
    const { target: { value } } = event
    setInterest(value)
  }

  const storeInterest = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.interest = interest
      }
      return data
    })

    setIdeaData(currentData)
    setStage('validation')
  }

  return (
    <Container>
      <h1>Question #3</h1>
      <h2>Rate the Interest/Enjoyment of {idea} from 1-10.</h2>
      <p>1 = not very interesting to you</p>
      <p>10 = very enjoyable and exciting</p>
      <input
        onChange={handleInterestChange}
        step={10}
        type='range'
        value={interest}
      />
      <button onClick={storeInterest}>Next</button>
    </Container>
  )
}

export default Interest
