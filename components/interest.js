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

const Interest = ({ setStage }) => {
  const [interest, setInterest] = useState(50)

  const handleInterestChange = () => {
    const { target: { value } } = event
    setInterest(value)
  }

  return (
    <Container>
      <h1>Question #3</h1>
      <h2>Rate the Interest/Enjoyment of “YOUR IDEA HERE” from 1-10.</h2>
      <p>1 = not very interesting to you</p>
      <p>10 = very enjoyable and exciting</p>
      <input
        onChange={handleInterestChange}
        step={10}
        type='range'
        value={interest}
      />
      <button onClick={() => setStage('validation')}>Next</button>
    </Container>
  )
}

export default Interest
