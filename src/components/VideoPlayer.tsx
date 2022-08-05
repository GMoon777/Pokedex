import ReactPlayer from "react-player";

import type { ReactPlayerProps } from "react-player";

export const VideoPlayer: React.FC<ReactPlayerProps> = props => {
  return (
    <ReactPlayer
    width="100%"
    height="auto"
    style={{
      position: "absolute",
      left: 0,
      top: -15,
      right: 0,

    }}
    playing={true}
    muted={true}
      {...props}
    />
  ) 
};