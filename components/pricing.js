import { useState } from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

const Container = styled.div`
  padding: 4rem;
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

  @media screen and (max-width: 600px) {
    padding: 2rem;
    input {
      min-width: 300px;
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
  const [noPrice, setNoPrice] = useState(false)

  const idea = ideaData[ideaPositionID].idea

  const handlePriceChange = (values) => {
    setNoPrice(false)
    const { value } = values;
    setPrice(value)
  }

  const storePriceData = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.price = price
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
      <NumberFormat
        value={price}
        thousandSeparator={true}
        prefix={'$'}
        placeholder='$99'
        onValueChange={values => handlePriceChange(values)}
      />
      {noPrice && <Error>Oy, you need to put in a price!</Error>}
      <button onClick={storePriceData}>Next</button>
    </Container>
  )
}

export default Pricing
