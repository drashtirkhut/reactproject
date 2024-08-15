import React, { useState} from "react";
import "./style.css";

const App = () => {
  const [hex,setHex]= useState("#ffffff");
  const randomizedHex =()=>{
      const randomColor="#"+Math.floor(Math.random()*16777215).toString(16);

      setHex(randomColor);
      console.log(App);
  }; 
  
  return <div className="App" style={{backgroundColor:`${hex}`,minHeight:"33.34vh",overflow:'hidden',zoom:3}}>
    <h1>{hex}</h1>
    <button onClick={randomizedHex}>Randomize</button>
    <button onClick={()=>navigator.clipboard.writeText(hex)}>copy color</button>
  </div>

};

export default App;

