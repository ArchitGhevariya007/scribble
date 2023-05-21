import React from "react";
import ContentTab from "./ContentTab";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TabContext from "../context/TabContext";

export default function MainCotainer() {
  return (
    <>
      <TabContext>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <ContentTab />
      </TabContext>
    </>
  );
}
