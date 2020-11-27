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

const RevenueGoal = ({
  ideaData,
  ideaID,
  setIdeaData,
  setStage
}) => {
  const [revenueGoal, setRevenueGoal] = useState('')

  const storeRevenueData = () => {
    const currentData = ideaData.map(data => {
      if (data.id === ideaID) {
        data.revenueGoal = revenueGoal
      }
      return data
    })

    setIdeaData(currentData)
    setStage('pricing')
  }

  return (
    <Container>
      <h1>What is your annual Total Revenue Goal 💰 for this idea?</h1>
      <p>Ex: $20,000 means you would want this idea to generate $20,000 in the next 12 months.</p>
      <p>That could be with multiple launches or an evergreen sales funnel.</p>
      <input
        onChange={() => setRevenueGoal(event.target.value)}
        type='text'
        value={revenueGoal}
      />
      <button onClick={storeRevenueData}>Next</button>
    </Container>
  )
}

export default RevenueGoal
