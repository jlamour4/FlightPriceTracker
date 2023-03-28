import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import FlightAppBar from '../components/flight-app-bar'
import Login from '../components/login'
import { Box, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

const navigation = [
  { name: 'How It Works', href: '#' },
  { name: 'Legal', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Changelog', href: '#' },
]

const theme = createTheme({
  palette: {
    primary: {
      main: '#304CB2'
    },
    info: {
      main: '#CCCCCC'
    },
    secondary: {
      main: '#FFBF27'
    }
  }
})

const styles = {
  mainText: {
    fontSize: 70, 
    textAlign: 'center', 
    fontWeight: 800, 
    width: 'calc(100vw - 4em)', 
    lineHeight: 1.1, 
    color: 'var(--southwest-yellow)'
  },
  secondaryText: {
    fontSize: 20,
    marginTop: 20
  },
  buttons: {
    lineHeight: 2.5,
    m: 1
  }
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <>
		{ openLogin ? (
				<Login/>
			) : (null)
		}
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
      <FlightAppBar/>
      {/* <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      {/* <div style={{flexGrow: 1, border: '1px solid red', alignItems: 'center'}}> */}
        <Box sx={{display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
          <Box sx={styles.mainText}>Find the best prices on Southwest Airlines flights</Box>
          <div style={styles.secondaryText}>Create an account to start adding flights and times to track</div>
          <Box sx={{mt: 5}}>
            <ThemeProvider theme={theme}>
              <Button sx={styles.buttons} variant="contained">Get started</Button>
              <Button sx={styles.buttons} color="info" variant="contained">Learn more</Button>
            </ThemeProvider>
          </Box>
        </Box>
      {/* </div> */}
    </div>
		</>
  )
}