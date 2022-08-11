import Logo from "../assets/NavBar/logoalt2.png";
import Charmander from "../assets/NavBar/charmanderAlt.png";
import Squirtle from "../assets/NavBar/squirtleAlt.png";
import React from "react";

export const NavBar = () => {

  return (
    <div className=" flex h-20 w-full items-center justify-center bg-[#3D7DCA] shadow-md shadow-black">


      <div className="flex h-full items-center">
        <img className="mr-2 h-[80%]" src={Charmander} alt="Charmander" />
        <img className="h-[80%]" src={Logo} alt="logo" />
        <img className="ml-2 h-[80%]" src={Squirtle} alt="Squirtle" />
      </div>
      </div>
  );
};
