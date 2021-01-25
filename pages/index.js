import { useState } from 'react'
import styled from 'styled-components'
// components
import Header from '../components/header'
import Start from '../components/start'
import Idea from '../components/idea'
import Scalability from '../components/scalability'
import Interest from '../components/interest'
import Validation from '../components/validation'
import Intermission from '../components/intermission'
import Numbers from '../components/numbers'
import RevenueGoal from '../components/revenueGoal'
import Pricing from '../components/pricing'
import Drumroll from '../components/drumroll'
import Results from '../components/results'

// styles
const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1.8fr 100px;
  grid-template-columns: 1fr;
  height: 100vh;
  justify-items: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    grid-template-rows: 100px 1fr 50px;
  }
`

const Body = styled.div`
  display: grid;
  justify-content: center;
  box-shadow: 0 3px 10px 3px rgba(0,0,0,0.1);
  border: none;
  border-radius: 5px;
  width: 70vw;
  background: #FFFFFF;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light1};
    font-size: 24px;
    text-transform: uppercase;
    padding: 10px 15px;
    min-width: 200px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    box-shadow: 0 3px 10px 3px rgba(0,0,0,0.1);
    cursor: pointer;

    :hover {
      background: ${({ theme }) => theme.colors.light1};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`

const LeftShape = styled.img`
  position: absolute;
  top: 20%;
  left: 5%;
  height: 400px;
  z-index: -1;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`

const RightShape = styled.img`
  position: absolute;
  top: 40%;
  right: 5%;
  height: 400px;
  z-index: -1;

  @media only screen and (max-width: 760px) {
    display: none;
  }
`

const BroughtBy = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;

  img {
    width: 100%;
    height: auto;
    max-width: 250px;
    border-radius: 5px;
  }

  div {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 50%;
    background: #fef0f0;
    border-radius: 5px;
    padding: 0 1rem;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, .1);

    h4 {
      color: ${({ theme }) => theme.colors.dark1};
    }
  }

  @media only screen and (max-width: 760px) {
    display: none;
  }
`

const Home = () => {
  const [stage, setStage] = useState('start')
  const [ideaData, setIdeaData] = useState([])
  const [ideaID, setIdeaID] = useState()
  const [ideaPositionID, setIdeaPositionID] = useState(0)

  const restart = () => {
    setIdeaData([])
    setIdeaID()
    setStage('start')
    setIdeaPositionID(0)
  }

  return (
    <Container>
      <Header restart={restart} />
      <Body>
        {stage === 'start' &&
          <Start setStage={setStage} />
        }
        {stage === 'idea' &&
          <Idea
            ideaData={ideaData}
            setIdeaData={setIdeaData}
            setIdeaID={setIdeaID}
            setStage={setStage}
          />
        }
        {stage === 'scalability' &&
          <Scalability
            ideaID={ideaID}
            ideaData={ideaData}
            ideaPositionID={ideaPositionID}
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
        {stage === 'interest' &&
          <Interest
            ideaID={ideaID}
            ideaData={ideaData}
            ideaPositionID={ideaPositionID}
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
        {stage === 'validation' &&
          <Validation
            ideaID={ideaID}
            ideaData={ideaData}
            ideaPositionID={ideaPositionID}
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
        {stage === 'intermission' &&
          <Intermission
            ideaPositionID={ideaPositionID}
            setIdeaPositionID={setIdeaPositionID}
            setStage={setStage}
          />
        }
        {stage === 'numbers' &&
          <Numbers
            ideaData={ideaData}
            setIdeaPositionID={setIdeaPositionID}
            setIdeaID={setIdeaID}
            setStage={setStage}
          />
        }
        {stage === 'revenue-goal' &&
          <RevenueGoal
            ideaID={ideaID}
            ideaData={ideaData}
            ideaPositionID={ideaPositionID}
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
        {stage === 'pricing' &&
          <Pricing
            ideaID={ideaID}
            ideaData={ideaData}
            ideaPositionID={ideaPositionID}
            setIdeaData={setIdeaData}
            setIdeaID={setIdeaID}
            setIdeaPositionID={setIdeaPositionID}
            setStage={setStage}
          />
        }
        {stage === 'drumroll' &&
          <Drumroll setStage={setStage} />
        }
        {stage === 'results' &&
          <Results
            ideaData={ideaData}
            setIdeaID={setIdeaID}
            setIdeaData={setIdeaData}
            setIdeaPositionID={setIdeaPositionID}
            setStage={setStage}
          />
        }
        <LeftShape src='/bg-shape-now-right.svg' />
        <RightShape src='/bg-shape-now-left.svg' />
      </Body>
      <div>
        {stage === 'start' &&
          <BroughtBy>
            <img src='/jasoncaroline.png' />
            <div>
              <h4>Brought to <br />you by WAIM</h4>
            </div>
          </BroughtBy>
        }
      </div>
    </Container>
  )
}

export default Home
