import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

//************* Exporting Context *************
export const TabContextCreate = createContext();

export default function TabContext(props) {
  //Todos

  //getting data from local storage and adding to state
  //if we don't get data then data will be lost after refreshing the page
  const getTodos = () => {
    const LocalTodo = localStorage.getItem("Tasks");
    if (LocalTodo === null) {
      return [];
    } else {
      return JSON.parse(LocalTodo);
    }
  };

  //************* Add todo text *************
  const [TodoText, SetTodoText] = useState("");
  const [AddTodoText, SetAddTodoText] = useState(getTodos());

  //Tabs
  //************* Getting Tabs from localStorage *************
  const getTabs = () => {
    const LocalTodo = localStorage.getItem("Tabs");
    if (LocalTodo === null) {
      return [{ Tabid: uuid(), TabName: "New" }];
    } else {
      return JSON.parse(LocalTodo);
    }
  };

  //Tabs State
  const [Tab, SetTab] = useState(getTabs());
  const [selectedTabId, setSelectedTabId] = useState(Tab[0].Tabid);

  //************* Add Tabs *************
  const AddTab = () => {
    SetTab([
      ...Tab,
      {
        Tabid: uuid(),
        TabName: "",
      },
    ]);
  };

  //************* Update Tabs *************
  const UpdateTabs = (e, index) => {
    const updatedTabs = [...Tab];
    updatedTabs[index].TabName = e.target.value;
    SetTab(updatedTabs);
  };

  //************* set Tabs data to local storage *************
  useEffect(() => {
    localStorage.setItem("Tabs", JSON.stringify(Tab));
  }, [Tab]);

  //************* delete Tabs function *************
  const DeleteTabs = (index,Notes, setNotes) => {
    const deletedTabId = Tab[index].Tabid;
    let newList = [...Tab];
    newList.splice(index, 1);
    SetTab([...newList]);

    // Remove the associated data from the AddTodoText array
    const updatedTodoText = AddTodoText.filter(
      (todo) => todo.TabId !== deletedTabId
    );
    SetAddTodoText(updatedTodoText);

    // Remove the associated notes
    const updatedNotes = Notes.filter((note) => note.TabId !== deletedTabId);
    setNotes(updatedNotes);

    // If the deleted tab was the currently selected tab, clear the selectedTabId
    if (selectedTabId === deletedTabId) {
      setSelectedTabId(null);
    }
  };

  //************* Handle Tab Selection *************
  const handleTabSelection = (tabId) => {
    setSelectedTabId(tabId);
  };

  return (
    <>
      <TabContextCreate.Provider
        value={{
          Tab,
          AddTab,
          UpdateTabs,
          DeleteTabs,
          handleTabSelection,
          selectedTabId,
          TodoText,
          SetTodoText,
          AddTodoText,
          SetAddTodoText,
        }}
      >
        {props.children}
      </TabContextCreate.Provider>
    </>
  );
}
