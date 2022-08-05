import { VideoPlayer } from "../components/VideoPlayer"
import IntroVideo from "../assets/intro.webm"

export const Intro = () => { 
    return (
        <div> 
             <VideoPlayer
              url={IntroVideo}
            />
        </div>
    )
}