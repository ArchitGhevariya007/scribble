import React,{createContext,useState, useEffect} from 'react'
import { v4 as uuid } from "uuid";

const TabContextCreate=createContext(); 

export default function TabContext(props) {

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
    
      //************* Update Tabs *************
      const UpdateTabs = (e,index) => {
        const updatedTabs = [...Tab];
        updatedTabs[index].tabName = e.target.value;
        SetTab(updatedTabs); 
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
      <TabContextCreate.Provider value={{Tab,AddTab,UpdateTabs,DeleteTabs}}>
        {props.children}
        </TabContextCreate.Provider>
    </>
  )
}

