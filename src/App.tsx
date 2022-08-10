import Pokedex from "./assets/Pokedex.png"
import { Pages } from "./pages"
import { NavBar } from "./components/NavBar";

function App() {

  return (
    <div className="flex w-full h-full justify-center ">
      <NavBar/>
      <div className=" fixed mt-24">
      <img src={Pokedex} alt="Pokedex" className=" z-[1] min-w-[581px]" />
      <div className="bg-[#8BAC10] w-[300px] h-[235px] rounded-[20px] absolute z-[9999] top-[28%] left-[20.5%] overflow-auto scrollbar-hide">
      
      <Pages />  </div>
    
      </div>


     
    
    </div>
   
  )
}

export default App
