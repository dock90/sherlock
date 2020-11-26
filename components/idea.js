import { useState } from 'react'
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

const Idea = ({ ideaData, setStage, setIdeaData }) => {
  const [idea, setIdea] = useState('')

  const storeIdea = () => {
    const currentIdea = {
      id: Math.floor(Math.random() * 1000),
      idea: idea
    }

    setIdeaData([
      ...ideaData,
      currentIdea
    ])
    setStage('scalability')
  }

  return (
    <Container>
      <h1>Question #1</h1>
      <h2>What is your offer idea?</h2>
      <input
        onChange={() => setIdea(event.target.value)}
        type='text'
        value={idea}
      />
      <button onClick={storeIdea}>Next</button>
    </Container>
  )
}

export default Idea
