"use client";

import React from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";

const VideoPlayer = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 648px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 649px) and (max-width: 1024px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1025px)" });
  let playerWidth, playerHeight;
  if (isSmallScreen) {
    playerWidth = "100%";
    playerHeight = "200px";
  } else if (isMediumScreen) {
    playerWidth = "600px";
    playerHeight = "300px";
  } else if (isLargeScreen) {
    playerWidth = "800px";
    playerHeight = "450px";
  }

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <ReactPlayer
        width={playerWidth}
        height={playerHeight}
        url={"https://youtu.be/EvMS73TWIQA?si=r7LeImWvVbku1Bc_"}
        controls={true}
        pipe={true}
      />
    </div>
  );
};

export default VideoPlayer;
