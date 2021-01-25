import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 4rem;
  text-align: center;

  p {
    margin: 0;
    color: ${props => props.theme.colors.dark2};
  }

  input {
    display: grid;
    margin: 2rem auto 0 auto;
    width: 56vw;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;

    input {
      width: 58vw;
    }
  }
`

const Labels = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin: 0 auto 2rem auto;
  width: 60vw;
  justify-items: center;
  justify-content: space-between;

  p {
    opacity: 25%;
  }

  p:nth-child(1), p:nth-child(10) {
    opacity: 100%;
  }
`

const Interest = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setStage
}) => {
  const [interest, setInterest] = useState(5)

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
      <h2>Rate the Interest/Enjoyment of "{idea}" from 1-10.</h2>
      <p>1 = not very interesting to you</p>
      <p>10 = very enjoyable and exciting</p>
      <input
        min={1}
        max={10}
        onChange={handleInterestChange}
        step={1}
        type='range'
        value={interest}
      />
      <Labels>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
      </Labels>
      <button onClick={storeInterest}>Next</button>
    </Container>
  )
}

export default Interest
