import React, { useState, useContext, useEffect } from "react";
import { Box, Grid, TextField, Button, Container, Stack } from "@mui/material";
import { v4 as uuid } from "uuid";
import { TabContextCreate } from "../context/TabContext";
import { MdOutlineDelete } from "react-icons/md";

export default function Passwords() {
  const style = {
    MainContainer: {
      display: "flex",
      flexWrap: "wrap",
      p: 1,
    },
    TextField: {
      backgroundColor: "transparent",
      border: "2px #2d3036  solid",
      borderRadius: 1,
      input: {
        color: "rgb(232, 232, 232)",
      },
      "& fieldset": { border: "none" },
    },
    psdlist: {
      padding: 1,
      mt: 2,
      borderRadius: 2,
      minHeight: "48vh",
      height: "auto",
      marginBottom: "10px",
    },
    psdContainer: {
      backgroundColor: "#2d3036",
      mt: 1,
      mb: 1,
      padding: 0.5,
      borderRadius: 1,
      width: "100%",
      "&:hover": {
        backgroundColor: "#353940",
        cursor: "pointer",
        transition: "transform .3s ease-out",
        transform: "scale(1.01)",
      },
    },
  };

  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);
  const selectedTab = Tabs.Passwords.find(
    (tab) => tab.TabId === Tabs.selectedTabId
  );

  const [Label, SetLabel] = useState("");
  const [UserName, SetUserName] = useState("");
  const [Password, SetPassword] = useState("");

  // console.log(selectedTab)

  //************* Add button handling *************
  const AddPassword = (e) => {
    if (Label !== "" && UserName !== "" && Password !== "") {
      Tabs.SetPasswords([
        ...Tabs.Passwords,
        {
          Passid: uuid(),
          TabId: Tabs.selectedTabId,
          Label: Label,
          UserName: UserName,
          Password: Password,
        },
      ]);
      // console.log(Label);
      // console.log(UserName);
      // console.log(Password);
    }
    SetLabel("");
    SetUserName("");
    SetPassword("");
    e.preventDefault();
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Passwords", JSON.stringify(Tabs.Passwords));
  }, [Tabs.Passwords]);

  //************* delete todos function *************
  const DeleteTask = (index) => {
    let newList = [...Tabs.Passwords];
    newList.splice(index, 1);
    Tabs.SetPasswords([...newList]);
  };

  return (
    <>
      <Box sx={style.MainContainer}>
        <form onSubmit={AddPassword}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={3}>
              <TextField
                placeholder="Enter Label"
                fullWidth
                sx={style.TextField}
                onChange={(e) => {
                  SetLabel(e.target.value);
                }}
                value={Label}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                placeholder="Username"
                fullWidth
                sx={style.TextField}
                onChange={(e) => {
                  SetUserName(e.target.value);
                }}
                value={UserName}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                placeholder="Password"
                fullWidth
                sx={style.TextField}
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                value={Password}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={1}>
              <Button variant="contained" size="large" type="submit">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>

        {/* Task List */}
        <Box sx={style.psdlist}>
          {Tabs.Passwords.length > 0 &&
            Tabs.Passwords.map((data, key) => {
              if (selectedTab && data.TabId === selectedTab.TabId) {
                return (
                  <Container maxWidth="lg" key={key} sx={style.psdContainer}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <p>{data.Label}</p>
                      <p>{data.UserName}</p>
                      <p>{data.Password}</p>
                      <Box>
                        <MdOutlineDelete
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            DeleteTask(key);
                          }}
                        />
                      </Box>
                    </Stack>
                  </Container>
                );
              } else {
                return null;
              }
            })}
        </Box>
      </Box>
    </>
  );
}
