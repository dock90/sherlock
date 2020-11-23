import styled from 'styled-components'

const Container = styled.div`
  text-align: center;

  input {
    display: grid;
    margin: 2rem 0;
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

const Idea = ({ setStage }) => (
  <Container>
    <h1>Question #1</h1>
    <h2>What is your offer idea?</h2>
    <input type='text' />
    <button onClick={() => setStage('scalability')}>Next</button>
  </Container>
)

export default Idea
