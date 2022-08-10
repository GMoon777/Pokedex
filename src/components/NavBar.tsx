import Logo from "../assets/Navbar/logoalt2.png";
import Charmander from '../assets/NavBar/charmanderAlt.png'
import Squirtle from '../assets/NavBar/squirtleAlt.png'
export const NavBar = () => { 

    return (
        <div className=" h-20 w-full flex bg-[#3D7DCA] items-center justify-center shadow-md shadow-black ">
            <img className="h-[80%] mr-2" src={Charmander} alt="Charmander" />
            <img className="h-[80%]" src={Logo} alt="logo" />
            <img className="h-[80%] ml-2" src={Squirtle} alt="Squirtle" />
        </div>
    )
}