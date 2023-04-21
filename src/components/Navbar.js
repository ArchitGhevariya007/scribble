import { Box, Typography } from '@mui/material'

import React from 'react'

export default function Navbar() {

    //Style for navbar
    const style={
        Navbar:{
            backgroundColor: "#2d3036",
            color:"white",
            padding:"2.1vh",
            
        },
        LogoText:{
            fontSize:"20px",
            fontweight:700,
            letterSpacing:"2px"
        }
    }
  return (
    <>
      <Box sx={style.Navbar}>
        <Typography variant="p" sx={style.LogoText}>Scribble</Typography>
      </Box>
    </>
  )
}
