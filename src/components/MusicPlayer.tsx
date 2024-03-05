import * as React from "react";
import sailorMusic from "../assets/audio/drunken-sailor.mp3";
import { usePiratesStore } from "../stores/usePirates";

export default function MusicPlayer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const isMusicPlaying = usePiratesStore((state) => state.isMusicPlaying);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.volume = 0.2;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isMusicPlaying]);

  return (
    <>
      <audio ref={audioRef} src={sailorMusic} loop />
    </>
  );
}
