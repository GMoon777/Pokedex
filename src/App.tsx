import Pokedex from "./assets/Pokedex.png"
import { Pages } from "./pages"
import { NavBar } from "./components/NavBar";
import React from "react";
import { AudioControls } from "./components/AudioControls";

function App() {

  return (
    <div className="flex w-full h-full justify-center ">
      <NavBar/>

    
      <div className=" fixed mt-24">
      <img src={Pokedex} alt="Pokedex" className=" z-[1] min-w-[581px]" />
      <div className="flex top-[19.5%] right-[28%] absolute z-[99999]"><AudioControls/></div>
      <div id={"screen-container"} className="bg-[#8BAC10] w-[300px] h-[235px] rounded-[20px] absolute z-[9999] top-[28%] left-[20.5%] overflow-auto scrollbar-hide">
      
      <Pages />  </div>
    
      </div>
    
    </div>
   
  )
}

export default App
