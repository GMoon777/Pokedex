import { VideoPlayer } from "../components/VideoPlayer";
import IntroVideo from "../assets/intro.mp4";
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import opening from '../assets/opening.mp3'
import loaded from '../assets/loaded.mp3'

export const Intro = () => {

  let navigate = useNavigate();

  const navigateToMain = () => {
    play()
    return navigate("/main", { replace: true });
  };
  const [play] = useSound(loaded);
  return (
    <div>
        <button 
        className=" bg-stone-400 sticky h-6 w-10 left-[84%] mt-1.5 z-[9999] rounded-lg"
        onClick={() => navigateToMain()}>
          <div className="text-center items-center justify-center">
          skip
          </div>
        </button>
      <VideoPlayer url={IntroVideo}
      onEnded={() => navigateToMain()} />
  
    </div>
  );
};
