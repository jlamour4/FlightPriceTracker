import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import FlightAppBar from '../components/FlightAppBar'
import Login from '../components/Login'
import { Box, Button } from '@mui/material'

const navigation = [
  { name: 'How It Works', href: '#' },
  { name: 'Legal', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Changelog', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)

  return (
    <>
		{ openLogin ? (
				<Login/>
			) : (null)
		}
		<FlightAppBar/>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
      <div style={{fontSize: 70, textAlign: 'center', fontWeight: 800, width: 'calc(100vw - 4em)', lineHeight: 1.1}}>Find the best prices on Southwest Airlines flights</div>
      <div style={{fontSize: 20, marginTop: 20}}>Create an account to start adding flights and times to track</div>
      <Box sx={{mt: 5}}>
        <Button>Get started</Button>
        <Button>Learn more</Button>
      </Box>
    </Box>
		</>
  )
}