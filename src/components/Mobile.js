import React from 'react'
import { Box,Typography } from '@mui/material'
import MobileImg from '../assets/Imgs/Mobile.png'


export default function Mobile() {

  const Style={
    Box:{
      display:"flex",
      flexDirection: 'column',
      justifyContent:"center",
      alignItems:"center",
      height:"90vh",
    },
     Image:{
      width:200,
      height:"auto",
      filter: "drop-shadow(10px 10px 10px #111)",
      maxWidth:"100%",
      maxHeight:"100%",
    },
    Text:{
      mt:1,
      textAlign: 'center',
      color:"rgb(232,232,232)"
    }
  }
  return (
    <>
    <Box sx={Style.Box}>
      <img src={MobileImg} alt="Mobile img" style={Style.Image}/>
    <Typography sx={Style.Text}>Please, Open in Laptop</Typography>
    </Box>

    </>
  )
}
