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

const Error = styled.p`
  color: #ff3333;
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
  const [numPrice, setNumPrice] = useState('')
  const [noPrice, setNoPrice] = useState(false)

  const idea = ideaData[ideaPositionID].idea

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price).slice(0, -3);

  const priceChange = (value) => {
    setNoPrice(false)
    setPrice(value)
  }

  const formatPrice = () => {
    setNumPrice(price)
    setPrice(formattedPrice)
  }

  const setPriceToNum = () => {
    setPrice(numPrice)
  }

  const storePriceData = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.price = numPrice
      }
      return data
    })

    if (price === '') {
      setNoPrice(true)
    } else {
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
  }

  return (
    <Container>
      <h1>💰 What price were you thinking of charging for "{idea}"?</h1>
      <p>Ex: $99 (you probably didn’t need this example 😉)</p>
      <input
        onBlur={formatPrice}
        onChange={() => priceChange(event.target.value)}
        onFocus={setPriceToNum}
        type='text'
        value={price}
      />
      {noPrice && <Error>Oy, you need to put in a price!</Error>}
      <button onClick={storePriceData}>Next</button>
    </Container>
  )
}

export default Pricing
