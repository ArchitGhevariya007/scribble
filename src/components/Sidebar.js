import React, { useState, useEffect } from "react";
import { Box, Stack, Grid, Button, TextField } from "@mui/material";
import { v4 as uuid } from "uuid";
import { IoIosMenu } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

export default function Sidebar() {
  //Style
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
    textBox: {
      input: {
        color: "rgb(232, 232, 232)",
        p: 0.5,
      },
    },
    textBoxGrid: {
      "& fieldset": { border: "none" },
    },
    iconsGrid: {
      fontSize: 20,
      mt: 1,
      ml: 1,
    },
    DeleteIcon: {
      mt: 0.7,
      cursor: "pointer",
    },
    SidebarItem: {
      backgroundColor: "#22262b",
      borderRadius: 1,
      padding: 0.5,
      alignItems: "center",
      mb: 1.1,
    },
  };

  const getTabs = () => {
    const LocalTodo = localStorage.getItem("Tabs");
    if (LocalTodo === null) {
      return [{ id: uuid(), tabName: "New" }];
    } else {
      return JSON.parse(LocalTodo);
    }
  };

  const [Tab, SetTab] = useState(getTabs());

  //************* Add Tabs *************
  const AddTab = () => {
    SetTab([
      ...Tab,
      {
        id: uuid(),
        tabName: null,
      },
    ]);
  };

  const UpdateTabs = (e) => {
    // SetTab((prevState) => (
    //   {
    //   ...prevState,
    //   tabName: e.target.value
    //   }
    //   ));
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Tabs", JSON.stringify(Tab));
  }, [Tab]);

  
  //************* delete Tabs function *************
  const DeleteTabs = (index) => {
    let newList = [...Tab];
    newList.splice(index, 1);
    SetTab([...newList]);
  };

  return (
    <>
      <Box sx={style.SideBarBody}>
        {Tab.map((tab, index) => (
          <Box sx={style.SidebarItem} key={index}>
            <Grid container alignItems="center" spacing={1}>
              <Grid item xs={1.4} sx={style.iconsGrid}>
                <IoIosMenu />
              </Grid>
              <Grid item xs={8} sx={style.textBoxGrid}>
                <TextField
                  size="small"
                  sx={style.textBox}
                  value={tab.tabName}
                  onChange={(e) => {
                    SetTab((prevState) => ({
                      ...prevState,
                      tabName: e.target.value,
                    }));
                  }}
                />
              </Grid>
              <Grid item xs={2} sx={style.DeleteIcon}>
                <MdOutlineDelete onClick={DeleteTabs} />
              </Grid>
            </Grid>
          </Box>
        ))}

        <Stack>
          <Button
            variant="outlined"
            startIcon={<AiOutlinePlus />}
            sx={style.addButton}
            onClick={AddTab}
          >
            Add
          </Button>
        </Stack>
      </Box>
    </>
  );
}
