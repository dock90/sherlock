import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

const Container = styled.div`
`

const Offer = styled.div`
  display: grid;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 2rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
`

const ScoreContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  margin-bottom: 2rem;
  text-align: center;

  border-bottom: 2px solid ${({ theme }) => theme.colors.dark2};
`

const Metric = styled.div`
  h3 {
    display: grid;
    justify-content: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.dark2};
    padding: 0.5rem 4rem;
    border-radius: 5px;
    box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);
  }
`

const OfferContainer = styled.div``

const OfferLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border-left: 2px solid ${({ theme }) => theme.colors.dark2};
  border-right: 2px solid ${({ theme }) => theme.colors.dark2};
  border-bottom: 2px solid ${({ theme }) => theme.colors.dark2};

  :first-child {
    border-top: 2px solid ${({ theme }) => theme.colors.dark2};
  }

  h3 {
    color: ${({ theme }) => theme.colors.dark1};
  }

  h4 {
    color: ${({ theme }) => theme.colors.dark2};
    margin: 0.2rem;
  }

  div {
    text-align: center;

    :not(:last-child) {
      border-right: 2px solid ${({ theme }) => theme.colors.dark2}
    }
  }
`

const NextSteps = styled.div`
  text-align: center;
`

// TODO: add jason / caroline in top right corner
// TODO: add confetti
// TODO: add winner offer sticker on left side of offer name

// Total revenue goal / price = number of customers
// total score = 3 metrics combined

const Results = ({
  ideaData,
  setIdeaID,
  setIdeaData,
  setIdeaPositionID,
  setStage
}) => {
  const [otherIdeas, setOtherIdeas] = useState([])

  useEffect(() => {
    const calculatedData = ideaData.map(data => {
      const {
        interest,
        price,
        revenueGoal,
        scalability,
        validation
      } = data

      const totalScore = parseInt(interest) + parseInt(scalability) + parseInt(validation)
      const numberOfCustomers = parseInt(revenueGoal) / parseInt(price)

      data.totalScore = totalScore
      data.numberOfCustomers = Math.round(numberOfCustomers)

      return data
    }).sort((a, b) => {
      if (a.totalScore < b.totalScore) return -1;
      if (a.totalScore > b.totalScore) return 1;
      return 0;
    }).reverse()

    setIdeaData(calculatedData)
  }, [])

  useEffect(() => {
    if (ideaData.length > 1) {
      ideaData.shift()
      console.log('Idea Data Shifted: ', ideaData)
      setOtherIdeas(ideaData)
    }
  }, [])

  const restart = () => {
    setIdeaData([])
    setIdeaID()
    setStage('idea')
    setIdeaPositionID(0)
  }

  const bestIdea = ideaData[0]
  const {
    idea,
    totalScore,
    numberOfCustomers
  } = bestIdea

  const width = window.innerWidth;
  const height = window.innerHeight;

  const places = [
    'Second Place',
    'Third Place',
    'Fourth Place',
    'Fifth Place',
    'Sixth Place',
    'Seventh Place',
    'Eight Place',
    'Ninth Place'
  ]

  return (
    <Container>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={3000}
        recycle={false}
      />
      <Offer>
        <h1>{idea}</h1>
      </Offer>
      <ScoreContainer>
        <Metric>
          <h2>Total Score</h2>
          <h3>{totalScore}</h3>
        </Metric>
        <Metric>
          <h2># of Customers Needed</h2>
          <h3>{numberOfCustomers}</h3>
        </Metric>
      </ScoreContainer>
      {otherIdeas &&
        <OfferContainer>
          {otherIdeas.map((data, index) => {
            const { idea, totalScore, numberOfCustomers } = data
            return (
              <OfferLayout>
                <div>
                  <h4>{places[index]}</h4>
                  <h3>{idea}</h3>
                </div>
                <div>
                  <h4>Total Score</h4>
                  <h3>{totalScore}</h3>
                </div>
                <div>
                  <h4># of Customers</h4>
                  <h3>{numberOfCustomers}</h3>
                </div>
              </OfferLayout>
            )
          })}
        </OfferContainer>
      }
      <NextSteps>
        <p>Want to test out a few other offer ideas?</p>
        <button onClick={restart}>Start Over</button>
      </NextSteps>
    </Container>
  )
}

export default Results
