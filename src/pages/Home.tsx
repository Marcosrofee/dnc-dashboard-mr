import { CardComponet, Header } from '@/components'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponet>CARD</CardComponet>
      </Container>
      <h1>Home</h1>
    </>
  )
}
export default Home
