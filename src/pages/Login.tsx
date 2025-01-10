import { Box, Container, Grid } from '@mui/material'
import { BannerImage, FormComponent, StyledH1, StyledP } from '@/components'
import { Logo } from '@/components'
import { pxToRem } from '@/utils'

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha para logar</StyledP>
              </Box>

              <FormComponent
                inputs={[
                  { type: 'error', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'Sucess!!!',
                  type: 'success',
                }}
              />
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'nome', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Login
