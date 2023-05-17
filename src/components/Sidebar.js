import React, { useState } from "react";
import { Box, Stack, Grid, Button, TextField } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

export default function Sidebar() {
  const style = {
    SideBarBody: {
      backgroundColor: "#2d3036",
      width: "200px",
      pt: 3.5,
      p: 2,
      height: "100vh",
      float: "left",
      position: "fixed",
      overflow: "auto",
    },
    addButton: {
      mt: 1.5,
      color: "rgb(232, 232, 232)",
      borderColor: "#808080",
      "&:hover": {
        borderColor: "#808080 ",
        backgroundColor: "rgba(232, 232, 232,0.04)",
      },
    },
    SidebarItems: {},
    textBox:{
      width:"10%"
      // "& fieldset": { border: "none" },
    },
    icons:{
      fontSize:27
    }
  };

  // const DefaultIcon = () => {
  //    {icon: IoIosMenu,
  //    CompoName: "Home"}
  // };
  const [IconList, SetIconList] = useState();
  //sidebar icons & names
  // const iconlist = [
  //   { icon: IoIosMenu, name: "Home" },
  //   { icon: IoIosMenu, name: "Test" },
  // ];

  return (
    <>
      <Box sx={style.SideBarBody}>
        <Box sx={style.SidebarItems}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <IoIosMenu style={style.icons}/>
            </Grid>
            <Grid item>
              <TextField variant="outlined"  sx={style.textBox}/>
            </Grid>
          </Grid>
        </Box>
        <Stack>
          <Stack direction="row" spacing={2}>
            {/* <IoIosMenu sx={Style.icon}/>
            <TextField id="outlined-basic" sizee="small" variant="outlined" sx={style.TextBox}/> */}
            {/* {IconList.map((icons, index) => (
              <Grid key={index}>{icons.icon}</Grid>
            ))} */}
          </Stack>
          <Button
            variant="outlined"
            startIcon={<AiOutlinePlus />}
            sx={style.addButton}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </>
  );
}
