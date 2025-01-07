import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #333;
`
const RegistrationImage = styled.div`
  background-image: url(image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`
function Restration() {
  return (
    <>
      <RegistrationArea>LOGIN</RegistrationArea>
      <RegistrationImage />
    </>
  )
}
export default Restration
