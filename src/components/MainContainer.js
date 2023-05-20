import React from 'react'
import ContentTab from './ContentTab'
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainCotainer() {
  return (
    <>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <ContentTab/>
    </>
  )
}
