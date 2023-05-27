import React, { useEffect, useContext } from "react";
import {
  Box,
  TextField,
  Stack,
  Button,
  Container,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { v4 as uuid } from "uuid";
//import { RxPencil1 } from "react-icons/rx";
import { MdOutlineDelete } from "react-icons/md";
import { TabContextCreate } from "../context/TabContext";

export default function Todos(props) {
  //Css
  const style = {
    addBox: {
      borderRadius: 0.3,
      padding: 1,
    },
    addTextField: {
      backgroundColor: "transparent",
      border: "2px #2d3036  solid",
      borderRadius: 1,
      input: {
        color: "rgb(232, 232, 232)",
      },
      "& fieldset": { border: "none" },
    },
    todolist: {
      padding: 1,
      mt: 2,
      borderRadius: 2,
      minHeight: "48vh",
      height: "auto",
      marginBottom: "10px",
    },
    todoContainer: {
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
    CheckBox: {
      color: "rgb(232, 232, 232)",
    },
  };

  //************* Using Context *************
  const Tabs = useContext(TabContextCreate);

  const selectedTab = Tabs.Tab.find((tab) => tab.Tabid === Tabs.selectedTabId);

  //************* Add button handling *************
  const AddTodo = (e) => {
    if (Tabs.TodoText !== "") {
      Tabs.SetAddTodoText([
        ...Tabs.AddTodoText,
        {
          Todoid: uuid(),
          TabId: Tabs.selectedTabId,
          task: Tabs.TodoText,
          isSelected: false,
        },
      ]);
      Tabs.SetTodoText("");
      e.preventDefault();
    }
  };

  //************* set data to local storage *************
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tabs.AddTodoText));
  }, [Tabs.AddTodoText]);

  //************* delete todos function *************
  const DeleteTask = (index) => {
    let newList = [...Tabs.AddTodoText];
    newList.splice(index, 1);
    Tabs.SetAddTodoText([...newList]);
  };

  //************* handle Checkbox Change *************
  const handleCheckboxChange = (event, index, Todoid) => {
    //update checkbox status
    Tabs.SetAddTodoText(
      Tabs.AddTodoText.map((item) =>
        item.Todoid === Todoid
          ? { ...item, isSelected: event.target.checked }
          : item
      )
    );
  };

  // Filter the todos based on the search text
  const filteredTodos = Tabs.AddTodoText.filter((todo) =>
    todo.task.toLowerCase().includes(props.searchText.toLowerCase())
  );

  return (
    <>
      {/* Add Todo Text Box */}
      <Box sx={style.addBox}>
        <TextField
          placeholder="Enter Task"
          sx={style.addTextField}
          fullWidth
          value={Tabs.TodoText}
          onChange={(e) => {
            Tabs.SetTodoText(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <Stack direction="row" spacing={1}>
                <Button variant="contained" disableRipple onClick={AddTodo}>
                  Add
                </Button>
              </Stack>
            ),
          }}
        />
      </Box>

      {/* Task List */}
      <Box sx={style.todolist}>
        {Tabs.AddTodoText != null
          ? filteredTodos.map((data, key) => {
              if (selectedTab && data.TabId === selectedTab.Tabid ) {
                return (
                  <Container maxWidth="lg" key={key} sx={style.todoContainer}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                    >
                      <FormControlLabel
                        label={
                          <span
                            style={{
                              textDecoration: data.isSelected
                                ? "line-through"
                                : "none",
                            }}
                          >
                            {data.task}
                          </span>
                        }
                        control={
                          <Checkbox
                            sx={style.CheckBox}
                            color="primary"
                            onChange={(event) =>
                              handleCheckboxChange(event, key, data.Todoid)
                            }
                            checked={data.isSelected}
                          />
                        }
                      />

                      <Box>
                        {/* <RxPencil1 style={{ marginRight: 10, cursor: "pointer" }} /> */}
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
            })
          : ""}
      </Box>
    </>
  );
}
