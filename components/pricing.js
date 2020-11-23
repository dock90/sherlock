import styled from 'styled-components'

const Container = styled.div`
  text-align: center;

  input {
    display: grid;
    margin: 2rem auto;
    font-size: 20px;
    padding: 12px 16px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
    min-width: 400px;

    :focus {
      box-shadow: 0 1px 3px hsla(237, 100%, 58%, .6);
      outline: none;
    }
  }
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
