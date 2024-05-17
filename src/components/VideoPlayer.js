import React from "react";

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <div className="overlay"></div>
      <video
        src="https://static.istockphoto.com/display-sets/istock/homepage/hero/iStock-1094872084-1252621883-1321322687-958158098.mp4"
        autoPlay
        loop
        muted
      />
      <div className="content">
        <h1 className="text-4xl">Welcome to <span className="text-blue-500">
          Iconic<span className="ml-1 text-black">India</span>
        </span></h1>
        <p>A gateway to India's cultural splendor.</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
