import React, { useState } from "react";
import audioData from "../audioData";
import ReactAudioPlayer from "react-audio-player";

export default function Frequencies() {
  const [isHovering, setIsHovering] = useState(audioData.map(() => false));
  const [pauseRotation, setPauseRotation] = useState(
    audioData.map(() => false)
  );

  const handleHover = (idx) => {
    if (pauseRotation[idx]) return;
    const newHoverStates = [...isHovering];
    newHoverStates[idx] = !newHoverStates[idx];
    setIsHovering(newHoverStates);
  };

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
    <div>
      {audioData.map((item, idx) => (
        <div
          key={idx}
          className={`hover-div ${isHovering[idx] ? "hover-div--hovered" : ""}`}
          onMouseEnter={() => handleHover(idx)}
          onMouseLeave={() => handleHover(idx)}
        >
          <div key={idx} className="frequenciesWrapperFront">
            <h3>{item.title}</h3>
            <ReactAudioPlayer
              className="audioPlayer"
              src={item.audio}
              loop
              controls
            />
          </div>
          <div
            className={`frequenciesWrapperBack ${
              pauseRotation[idx] ? "pulsate" : ""
            }`}
          >
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
        </div>
      ))}
    </div>
  );
}
