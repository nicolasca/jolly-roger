import { useEffect, useState } from "react";

export const useKeyboardControls = () => {
  const [keys, setKeys] = useState({
    left: false,
    right: false,
    up: false,
    down: false,
    space: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setKeys((keys) => ({ ...keys, left: true }));
      if (e.key === "ArrowRight") setKeys((keys) => ({ ...keys, right: true }));
      if (e.key === "ArrowUp") setKeys((keys) => ({ ...keys, up: true }));
      if (e.key === "ArrowDown") setKeys((keys) => ({ ...keys, down: true }));
      if (e.key === " ") setKeys((keys) => ({ ...keys, space: true }));
    };

    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") setKeys((keys) => ({ ...keys, left: false }));
      if (e.key === "ArrowRight")
        setKeys((keys) => ({ ...keys, right: false }));
      if (e.key === "ArrowUp") setKeys((keys) => ({ ...keys, up: false }));
      if (e.key === "ArrowDown") setKeys((keys) => ({ ...keys, down: false }));
      if (e.key === " ") setKeys((keys) => ({ ...keys, space: false }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return keys;
};
