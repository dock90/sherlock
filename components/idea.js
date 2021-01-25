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

  @media screen and (max-width: 600px) {
    input {
      min-width: 300px;
    }
  }
`

const Error = styled.p`
  color: #ff3333;
`

const Idea = ({
  ideaData,
  setIdeaData,
  setIdeaID,
  setStage
}) => {
  const [idea, setIdea] = useState('')
  const [noIdea, setNoIdea] = useState(false)

  const ideaChange = (value) => {
    setNoIdea(false)
    setIdea(value)
  }

  const storeIdea = () => {
    const formattedIdea = idea.trim()
    if (formattedIdea === '') {
      console.log('Oy, you need to put in an idea')
      setNoIdea(true)
    } else {
      setNoIdea(false)
      const id = Math.floor(Math.random() * 1000)
      const currentIdea = {
        id: id,
        idea: idea
      }

      setIdeaID(id)
      setIdeaData([
        ...ideaData,
        currentIdea
      ])
      setStage('scalability')
    }
  }

  return (
    <Container>
      <h1>Question #1</h1>
      <h2>What is your offer idea?</h2>
      <input
        onChange={() => ideaChange(event.target.value)}
        type='text'
        value={idea}
      />
      {noIdea && <Error>Oy, you need to put in an idea!</Error>}
      <button onClick={storeIdea}>Next</button>
    </Container>
  )
}

export default Idea
