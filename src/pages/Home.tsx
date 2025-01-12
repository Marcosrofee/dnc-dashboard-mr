import { AvatarList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/DncAvatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(4234.54),
    },
    {
      avatar: '/DncAvatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2234.54),
    },
    {
      avatar: '/DncAvatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(1234.54),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarList listData={mockListData} />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}
export default Home
