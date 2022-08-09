
import Pokedex from "./assets/Pokedex.png"
import { Pages } from "./pages"
import { useState } from "react";
// import ReactAudioPlayer from "react-audio-player";
// import Theme from './assets/theme.mp3'
function App() {
  return (
    <div className="flex w-full h-full justify-center ">

      <div className=" fixed ">
      <img src={Pokedex} alt="Pokedex" className=" z-[1] min-w-[581px]" />
      <div className="bg-[#8BAC10] w-[300px] h-[235px] rounded-[20px] absolute z-[9999] top-[28%] left-[20.5%] overflow-auto scrollbar-hide">
        
      <Pages />  </div>
    
      </div>

      {/* <div className="flex top-[800px]">  
      <ReactAudioPlayer
      src={Theme}
      autoPlay
      controls
    />  */}
    
    </div>
   
  )
}

export default App
