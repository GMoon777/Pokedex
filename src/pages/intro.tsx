import { VideoPlayer } from "../components/VideoPlayer";
import IntroVideo from "../assets/intro.mp4";
import { useNavigate } from "react-router-dom";

export const Intro = () => {
  let navigate = useNavigate();

  const navigateToMain = () => {
    return navigate("/main", { replace: true });
  };

  return (
    <div>
        <button 
        className=" bg-stone-400 fixed h-6 w-10 left-[60.5%] top-[33.5%] z-[9999] rounded-lg"
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
