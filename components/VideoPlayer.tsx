"use client";

import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const video = "/video.mp4";
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <ReactPlayer
        width="400px"
        height="200px"
        url={"https://youtu.be/EvMS73TWIQA?si=r7LeImWvVbku1Bc_"}
        controls={true}
        pipe={true}
      />
    </div>
  );
};

export default VideoPlayer;
