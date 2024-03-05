import * as React from "react";
import jollyRoger from "../assets/images/jolly-roger-cartoon.png";
import audioFile from "../assets/audio/drunken-sailor.mp3";
import { usePiratesStore } from "../stores/usePirates";

export default function JollyRoger() {
  const playMusic = usePiratesStore((state) => state.playMusic);

  return (
    <>
      <a href="/pirates-home" className="peer">
        <img
          className="transition ease-in-out duration-500 grayscale hover:grayscale-0 hover:cursor-pointer"
          src={jollyRoger.src}
          onClick={playMusic}
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
    </>
  );
}
