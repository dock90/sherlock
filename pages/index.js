import { useState } from 'react'
import Link from 'next/link'
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
  grid-template-rows: 100px auto;
  grid-template-columns: 1fr;
  height: 100vh;
`

const Body = styled.div`
  display: grid;
  justify-content: center;
  max-width: 90vw;
  margin: 10rem auto 0 auto;

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light1};
    font-size: 24px;
    text-transform: uppercase;
    padding: 10px 15px;
    min-width: 200px;
    border: none;
    border-radius: 5px;
    box-shadow: 0 3px 10px 3px rgba(0,0,0,0.1)
  }
`

const BroughtBy = styled.div`
  display: grid;
  align-self: end;

  img {
    width: 100%;
    height: auto;
    max-width: 250px;
    border-radius: 5px;
  }

  div {
    position: absolute;
    bottom: 1%;
    left: 8%;
    background: #fef0f0;
    border-radius: 5px;
    padding: 0 1rem;
    box-shadow: 0 4px 6px hsla(0, 0%, 0%, .1);

    h4 {
      color: ${({ theme }) => theme.colors.dark1};
    }
  }
`
// overall flows

// idea cycle
// idea, scalability, interest, validation
// add another idea - loop back through questions

// numbers cycle
// revenue goal, pricing
// repeat numbers cycle per idea

// data structure
const data = [
  {
    id: Number,
    idea: String,
    scalability: Number,
    interest: Number,
    validation: Number,
    revenueGoal: Number,
    pricing: Number
  }
]

// pass in id to state set

const Home = () => {
  const [stage, setStage] = useState('start')
  const [ideaData, setIdeaData] = useState([])

  console.log('Main Data Store: ', ideaData)

  return (
    <Container>
      <Header />
      <Body>
        {stage === 'start' &&
          <Start setStage={setStage} />
        }
        {stage === 'idea' &&
          <Idea
            ideaData={ideaData}
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
        {stage === 'scalability' &&
          <Scalability setStage={setStage} />
        }
        {stage === 'interest' &&
          <Interest setStage={setStage} />
        }
        {stage === 'validation' &&
          <Validation setStage={setStage} />
        }
        {stage === 'intermission' &&
          <Intermission setStage={setStage} />
        }
        {stage === 'numbers' &&
          <Numbers setStage={setStage} />
        }
        {stage === 'revenue-goal' &&
          <RevenueGoal setStage={setStage} />
        }
        {stage === 'pricing' &&
          <Pricing setStage={setStage} />
        }
        {stage === 'drumroll' &&
          <Drumroll setStage={setStage} />
        }
        {stage === 'results' &&
          <Results
            setIdeaData={setIdeaData}
            setStage={setStage}
          />
        }
      </Body>
      {stage === 'start' &&
        <BroughtBy>
          <img src='/jasoncaroline.png' />
          <div>
            <h4>Brought to <br />you by WAIM</h4>
          </div>
        </BroughtBy>
      }
    </Container>
  )
}

export default Home
