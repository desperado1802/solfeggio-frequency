import React from "react";
import audioData from "../audioData";
import ReactAudioPlayer from "react-audio-player";

export default function Frequencies() {
  return (
    <div className="frequenciesMainContainer">
      {audioData.map((item, idx) => (
        <div key={idx} className="frequenciesWrapper">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ReactAudioPlayer className="audioPlayer" src={item.audio} controls />
        </div>
      ))}
    </div>
  );
}
