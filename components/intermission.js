import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
`

const Intermission = () => (
  <Container>
    <h1>ADD ANOTHER IDEA?</h1>
    <p>If you are trying to decide between multiple ideas, let’s have you add another idea to compare them. If you have just one idea, click the Skip and move on button.
</p>
    <Link href='/idea'>
      <a>
        <button>Add Another Idea!</button>
      </a>
    </Link>
    <Link href='/numbers'>
      <a>
        <button>Skip and Move On</button>
      </a>
    </Link>
  </Container>
)

export default Intermission
