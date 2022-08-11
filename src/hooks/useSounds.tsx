import { useSound } from "use-sound";
import { useEffect, useState } from "react";
import mainTheme from "../assets/Audio/Music/mainTheme.mp3";
import pCityTheme from "../assets/Audio/Music/pCityTheme.mp3";
import roadToVCity from "../assets/Audio/Music/roadToVCity.mp3";
import pGym from "../assets/Audio/Music/pGym.mp3";
import pCenter from "../assets/Audio/Music/pCenter.mp3";
import sAnne from "../assets/Audio/Music/sAnne.mp3";
import cCity from "../assets/Audio/Music/cCity.mp3";
import pTown from "../assets/Audio/Music/pTown.mp3";

// important to be stored outside of react so that its got a static identity
const TRACKS = [
  mainTheme,
  pCityTheme,
  roadToVCity,
  pGym,
  pCenter,
  sAnne,
  cCity,
  pTown,
];

export const useSounds = () => {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const playNext = () =>
    setActiveTrackIndex((activeTrackIndex + 1) % TRACKS.length);
  const playPrevious = () =>
    setActiveTrackIndex((activeTrackIndex - 1 + TRACKS.length) % TRACKS.length);

  /** @type {import("use-sound/dist/types").HookOptions} */
  const options = {
    volume: 0.4,
    interrupt: true,
    onplay: () => setIsPlaying(true),
    onstop: () => setIsPlaying(false),
    onended: () => setIsPlaying(false),
  };

  const tracks = [
    useSound(TRACKS[0], options),
    useSound(TRACKS[1], options),
    useSound(TRACKS[2], options),
    useSound(TRACKS[3], options),
    useSound(TRACKS[4], options),
    useSound(TRACKS[5], options),
    useSound(TRACKS[6], options),
    useSound(TRACKS[7], options),
  ];

  const [play, { stop }] = tracks[activeTrackIndex];

  useEffect(() => {
    if (hasPlayed) {
      play();
      return () => stop();
    }
  }, [play, stop, hasPlayed]);

  useEffect(() => {
    if (isPlaying) {
      setHasPlayed(true);
    }
  }, [isPlaying]);

  return { play, stop, playNext, playPrevious, activeTrackIndex, isPlaying };
};
