import Logo from "../assets/Navbar/logoalt2.png";
import Charmander from "../assets/NavBar/charmanderAlt.png";
import Squirtle from "../assets/NavBar/squirtleAlt.png";
import mainTheme from "../assets/maintheme.mp3";
import pCityTheme from "../assets/pCityTheme.mp3";
import roadToVCity from "../assets/roadToVCity.mp3";
import useSound from "use-sound";
import { Howl, Howler } from "howler";
import React, { useEffect, useState } from "react";
import { TiMediaPause } from "react-icons/ti";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";

export const NavBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const main = new Howl({
    src: mainTheme,
    loop: false,
    volume: 0.5,
    preload: true,
    // onend: () => skip()
  });
  const pcity = new Howl({
    src: pCityTheme,
    loop: false,
    volume: 0.5,
    preload: true,
  });
  const roadtovc = new Howl({
    src: roadToVCity,
    loop: false,
    volume: 0.5,
    preload: true,
  });

  const shuffle = () => {
    let trackList = [main, pcity, roadtovc];
    let track = trackList[Math.floor(Math.random() * trackList.length)];
    return track;
  };

  const [trackPlaying, setTrackPlaying] = useState(shuffle());
  const playPause = () => {
    trackPlaying.playing() ? trackPlaying.pause() : trackPlaying.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    trackPlaying.play();
    setIsPlaying(true);
  }, [trackPlaying]);
  //   const skip = () => {
  //     trackPlaying.unload()
  //     setTrackPlaying(shuffle());
  //     trackPlaying.load()
  //     trackPlaying.play();
  //   };

  return (
    <div className=" flex h-20 w-full items-center justify-center bg-[#3D7DCA] shadow-md shadow-black">
      <button
        className="left-[84%] pr-1 z-[9999] mt-1.5 flex h-5 w-16 items-center justify-center rounded-lg bg-stone-400 text-center"
        onClick={() => playPause()}
      >
        <GiSpeaker/>
        {isPlaying ? "Pause" : "Play"}
      </button>
      {/* <button
        className="left-[84%] z-[9999] mt-1.5 h-4 w-10 rounded-lg bg-stone-400"
        onClick={() => skip()}
      /> */}
      <img className="mr-2 h-[80%]" src={Charmander} alt="Charmander" />
      <img className="h-[80%]" src={Logo} alt="logo" />
      <img className="ml-2 h-[80%]" src={Squirtle} alt="Squirtle" />
    </div>
  );
};
