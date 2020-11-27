import { useState } from 'react'
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

const Pricing = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setIdeaID,
  setIdeaPositionID,
  setStage
}) => {
  const [price, setPrice] = useState('')

  const idea = ideaData[ideaPositionID].idea

  const storePriceData = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.price = price
      }
      return data
    })

    setIdeaData(currentData)

    const nextID = ideaPositionID + 1

    if (nextID < ideaData.length) {
      setIdeaPositionID(nextID)
      setIdeaID(ideaData[nextID].id)
      setStage('revenue-goal')
    } else {
      setStage('drumroll')
    }
  }

  return (
    <Container>
      <h1>💰 What price were you thinking of charging for {idea}?</h1>
      <p>Ex: $99 (you probably didn’t need this example 😉)</p>
      <input
        onChange={() => setPrice(event.target.value)}
        type='text'
        value={price}
      />
      <button onClick={storePriceData}>Next</button>
    </Container>
  )
}

export default Pricing
