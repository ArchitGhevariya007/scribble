import React from 'react'
import { Box,Divider } from '@mui/material'

const style={
    MainContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        p:1,
        m:1,

    },
    notesContainer:{
        backgroundColor:"#2d3036",
        width:250,
        height:250,
        p:1.5,
        borderRadius:1,
        m:1
    }
}
export default function Notes() {

    //Clock
  var today = new Date().toLocaleDateString(undefined, {
      month: "long",
     day: "2-digit",
    // weekday: "long",
  });

  return (
    <>
    <Box sx={style.MainContainer}>
    <Box sx={style.notesContainer}>
        ajsghd
        <Divider />
        {today}
      </Box>
      <Box sx={style.notesContainer}>
        ajsghd
        <Divider />
        {today}
      </Box>
      <Box sx={style.notesContainer}>
        ajsghd
        <Divider />
        {today}
      </Box>
      <Box sx={style.notesContainer}>
        ajsghd
        <Divider />
        {today}
      </Box>
    </Box>

    </>
  )
}
