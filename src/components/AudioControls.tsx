import { useSounds } from "../hooks/useSounds";
import React, { useEffect } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { IoIosSkipForward } from "react-icons/io";

export const AudioControls = () => {
    const { play, stop, playNext, activeTrackIndex, isPlaying } = useSounds();
    {
      JSON.stringify({ activeTrackIndex }, null, 2);
    }
    {
      JSON.stringify({ isPlaying }, null, 2);
    }
    useEffect(() => {
      play();
    }, [play]);
    return (
  
        <div className="flex flex-row items-center justify-between gap-1 ">
        <button
          className="z-[9999] flex h-5 w-16 items-center justify-center rounded-lg bg-stone-400  text-center"
          onClick={() => (isPlaying ? stop() : play())}
        >
          {isPlaying ? (
            <GiSpeaker
              style={{
                width: 20,
                height: 20,
                paddingRight: 2,
              }}
            />
          ) : (
            <GiSpeakerOff
              style={{
                width: 20,
                height: 20,
                paddingRight: 2,
              }}
            />
          )}
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="z-[9999]  flex h-5 w-16 items-center justify-center rounded-lg bg-stone-400  text-center"
          onClick={() => playNext()}
        >
          <IoIosSkipForward
            style={{
              width: 20,
              height: 20,
              paddingRight: 3,
            }}
          />{" "}
          Skip
        </button>
  </div>

    );
  };
  