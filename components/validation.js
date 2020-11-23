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

const Validation = ({ setStage }) => {
  const [validation, setValidation] = useState(50)

  const handleValidationChange = () => {
    const { target: { value } } = event
    setValidation(value)
  }

  return (
    <Container>
      <h1>Question #4</h1>
      <h2>Rate the Current Validation with YOUR audience of “YOUR IDEA HERE” from 1-10.</h2>
      <p>1 = you have no idea if your audience needs or wants this</p>
      <p>10 = your audience has shown interest and willingness to pay</p>
      <input
        onChange={handleValidationChange}
        step={10}
        type='range'
        value={validation}
      />
      <button onClick={() => setStage('intermission')}>Next</button>
    </Container>
  )
}

export default Validation
