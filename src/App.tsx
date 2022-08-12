import Pokedex from "./assets/Pokedex.png";
import { Pages } from "./pages";
import { NavBar } from "./components/NavBar";
import React, { useState } from "react";
import { AudioControls } from "./components/AudioControls";
import { ScrollContext } from "./context";
import { Clock } from "./components/Clock";
const App = () => {
  const [scrollContext, setScrollContext] = useState({
    atTop: true,
    atBottom: false,
  });

  return (
    <ScrollContext.Provider value={scrollContext}>
      <div className="flex h-full w-full justify-center ">
        <NavBar />

        <div className=" fixed mt-24">
          <img src={Pokedex} alt="Pokedex" className=" z-[1] min-w-[581px]" />

          <div className="absolute top-[19.5%] right-[24%] z-[99999] flex">
            <AudioControls />
          </div>
          <div className="absolute top-[16.5%] right-[24%] z-[99999] flex h-[20px]  min-w-[132px] items-center rounded-[20px] bg-[#8BAC10]">
            <Clock />
          </div>

          <div
            id={"screen-container"}
            className="absolute top-[28%] left-[20.5%] z-[9999] h-[235px] w-[300px] overflow-auto rounded-[20px] bg-[#8BAC10] scrollbar-hide"
            onScroll={(event) => {
              const el = event.target as HTMLDivElement;
              const scrollTop = el.scrollTop;
              const scrollHeight = el.scrollHeight;
              const clientHeight = el.clientHeight;
              const atTop = scrollTop === 0;
              // added ( < 2 ) as padding as the scroll never hits the absolute bottom, this ensures the atBottom is set correctly
              const atBottom = scrollHeight - (scrollTop + clientHeight) < 2;
              if (
                !(
                  atTop === scrollContext.atTop &&
                  atBottom === scrollContext.atBottom
                )
              ) {
                setScrollContext({ atTop, atBottom });
              }
            }}
          >
            <Pages />{" "}
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default App;
