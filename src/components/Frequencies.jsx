import React, { useState } from "react";
import audioData from "../audioData";
import ReactAudioPlayer from "react-audio-player";

export default function Frequencies() {
  const [pauseRotation, setPauseRotation] = useState(
    audioData.map(() => false)
  );

  const playingFrequencyTrue = (idx) => {
    const newPlaying = [...pauseRotation];
    newPlaying[idx] = true;
    setPauseRotation(newPlaying);
  };
  const playingFrequencyFalse = (idx) => {
    const newPlaying = [...pauseRotation];
    newPlaying[idx] = false;
    setPauseRotation(newPlaying);
  };

  return (
    <div className="hover-div">
      {audioData.map((item, idx) => (
        <div
          key={idx}
          className={`frequenciesWrapper ${
            pauseRotation[idx] ? "pulsate" : ""
          }`}
        >
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <ReactAudioPlayer
            className="audioPlayer"
            src={item.audio}
            onPlay={() => playingFrequencyTrue(idx)}
            onPause={() => playingFrequencyFalse(idx)}
            loop
            controls
          />
        </div>
      ))}
    </div>
  );
}
