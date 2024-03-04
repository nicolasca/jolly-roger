import * as React from "react";
import jollyRoger from "../assets/images/jolly-roger-cartoon.png";
import audioFile from "../assets/audio/drunken-sailor.mp3";

export default function JollyRoger() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      // audioRef.current.currentTime = 0; // Rewind to the start
    }
  };

  return (
    <>
      <a href="/pirates-home" className="peer">
        <img
          className="transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:cursor-pointer"
          src={jollyRoger.src}
          onMouseEnter={playSound}
          onMouseLeave={stopSound}
          alt="Jolly roger figure"
          width="200"
          height="200"
          style={{ viewTransitionName: "pirate" }}
        />
      </a>
      <blockquote className="opacity-0 ease-in-out duration-500 peer-hover:opacity-100 text-slate-50 text-lg mt-20">
        “If there’s a man among ye, ye’ll come up and fight like the man ye are
        to be!” ― Mary Read
      </blockquote>
      <audio ref={audioRef} src={audioFile} />
    </>
  );
}
