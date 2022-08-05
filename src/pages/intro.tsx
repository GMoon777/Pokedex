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
        onClick={() => navigateToMain()}>
      <VideoPlayer url={IntroVideo} onEnded={() => navigateToMain()} />
      </button>
    </div>
  );
};
