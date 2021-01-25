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

const RevenueGoal = ({
  ideaData,
  ideaID,
  ideaPositionID,
  setIdeaData,
  setStage
}) => {
  const [revenueGoal, setRevenueGoal] = useState('')
  const [noRevenue, setNoRevenue] = useState(false)

  const idea = ideaData[ideaPositionID].idea

  const handleRevenueChange = (values) => {
    setNoRevenue(false)
    const { value } = values;
    setRevenueGoal(value)
  }

  const storeRevenueData = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.revenueGoal = revenueGoal
      }
      return data
    })

    if (revenueGoal === '') {
      setNoRevenue(true)
    } else {
      setIdeaData(currentData)
      setStage('pricing')
    }
  }

  return (
    <Container>
      <h1>What is your annual Total Revenue Goal 💰 for "{idea}"?</h1>
      <p>Ex: $20,000 means you would want this idea to generate $20,000 in the next 12 months.</p>
      <p>That could be with multiple launches or an evergreen sales funnel.</p>
      <NumberFormat
        value={revenueGoal}
        thousandSeparator={true}
        prefix={'$'}
        placeholder='$20,000'
        onValueChange={values => handleRevenueChange(values)}
      />
      {noRevenue && <Error>Oy, you need to put in a revenue goal!</Error>}
      <button onClick={storeRevenueData}>Next</button>
    </Container>
  )
}

export default RevenueGoal
