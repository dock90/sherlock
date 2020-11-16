import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Pricing = ({ setStage }) => (
  <Container>
    <h1>💰 What price were you thinking of charging for “A Course Teaching People Photoshop”?</h1>
    <p>Ex: $99 (you probably didn’t need this example 😉)</p>
    <input type='text' />
    <button onClick={() => setStage('drumroll')}>Next</button>
  </Container>
)

export default Pricing
