import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
// components
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
`
// overall flows

// idea cycle
// idea, scalability, interest, validation
// add another idea - loop back through questions

// numbers cycle
// revenue goal, pricing
// repeat numbers cycle per idea

const Home = () => {
  const [stage, setStage] = useState('start')
  return (
    <Container>
      {stage === 'start' &&
        <Start setStage={setStage} />
      }
      {stage === 'idea' &&
        <Idea setStage={setStage} />
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
        <Results />
      }
    </Container>
  )
}

export default Home
