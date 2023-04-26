import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div style={{width:"80%",marginLeft:"210px"}}>Hello world</div>
    </>
  );
}

export default App;
