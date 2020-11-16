import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Validation = ({ setStage }) => (
  <Container>
    <h1>Question #4</h1>
    <h2>Rate the Current Validation with YOUR audience of “YOUR IDEA HERE” from 1-10.</h2>
    <p>le fancy picker slider goes here</p>
    <p>1 = you have no idea if your audience needs or wants this</p>
    <p>10 = your audience has shown interest and willingness to pay</p>
    <button onClick={() => setStage('intermission')}>Next</button>
  </Container>
)

export default Validation
