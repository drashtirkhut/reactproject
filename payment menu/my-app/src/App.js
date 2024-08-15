import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero /> 
      <Submenu />
      {/* <h1 className="h-40 w-9 text-pink">hello</h1> */}
    </>
  );
}

export default App;
