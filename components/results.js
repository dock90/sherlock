import Link from 'next/link'
import styled from 'styled-components'

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
  margin-bottom: 2rem;

  border-top: 2px solid ${({ theme }) => theme.colors.dark2};
  border-left: 2px solid ${({ theme }) => theme.colors.dark2};
  border-right: 2px solid ${({ theme }) => theme.colors.dark2};

  :last-child {
    border-bottom: 2px solid ${({ theme }) => theme.colors.dark2};
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

const Results = ({ setIdeaData, setStage }) => {
  const restart = () => {
    setIdeaData([])
    setIdeaID()
    setStage('idea')
  }

  return (
    <Container>
      <Offer>
        <h1>Mobile Waffle and Ice Cream Truck!</h1>
      </Offer>
      <ScoreContainer>
        <Metric>
          <h2>Total Score</h2>
          <h3>28</h3>
        </Metric>
        <Metric>
          <h2># of Customers Needed</h2>
          <h3>450</h3>
        </Metric>
      </ScoreContainer>
      <OfferContainer>
        <OfferLayout>
          <div>
            <h4>Second Place</h4>
            <h3>Waffle Truck</h3>
          </div>
          <div>
            <h4>Total Score</h4>
            <h3>45</h3>
          </div>
          <div>
            <h4># of Customers</h4>
            <h3>23</h3>
          </div>
        </OfferLayout>
      </OfferContainer>
      <NextSteps>
        <p>Want to test out a few other offer ideas?</p>
        <button onClick={restart}>Start Over</button>
      </NextSteps>
    </Container>
  )
}

export default Results
