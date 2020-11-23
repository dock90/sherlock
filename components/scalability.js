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

const Scalability = ({ setStage }) => {
  const [scalability, setScalability] = useState(50)

  const handleScalabilityChange = () => {
    const { target: { value } } = event
    console.log('Changing: ', event.target.value)
    setScalability(value)
  }

  return (
    <Container>
      <h1>Question #2</h1>
      <h2>Rate the Scalability/Sustainability of “YOUR IDEA HERE” from 1-10.</h2>
      <p>1 = not a lot of revenue potential plus a high time investment</p>
      <p>10 = very scalable financially</p>
      <input
        onChange={handleScalabilityChange}
        step={10}
        type='range'
        value={scalability}
      />
      <button onClick={() => setStage('interest')}>Next</button>
    </Container>
  )
}

export default Scalability
