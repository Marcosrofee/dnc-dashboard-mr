import { Box, Container, Grid } from '@mui/material'

import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
  StyledUl,
} from '@/components'
import { pxToRem } from '@/utils'

import { BannerImage, StyledH1, StyledP, StyledUl, Logo } from '@/components'
import { pxToRem } from '@/utils'
import FormComponent from '@/components/FormComponents'


function Restration() {
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
                <StyledH1>faça seu cadastro</StyledH1>
                <StyledP>Primeiro diga-nos quem você é</StyledP>

              <Box sx={{ marginBotton: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBotton: pxToRem(24) }}>
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>primeiro, diaga-nos quem você é.</StyledP>

                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial.</li>
                  <li>Pelo menos um número</li>
                </StyledUl>
              </Box>
              <FormComponent
                inputs={[

                  { type: 'error', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },

                  { type: 'email', placeholder: 'email' },

                ]}
                buttons={[
                  { className: 'primary', type: 'submit', children: 'Login' },
                ]}
                message={{
                  msg: 'Error!!!',
                  type: 'error',
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
export default Restration
