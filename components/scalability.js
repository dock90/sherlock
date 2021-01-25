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
      <button onClick={storeScalability}>Next</button>
    </Container>
  )
}

export default Scalability
