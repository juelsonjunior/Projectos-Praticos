import { useEffect, useRef, useState } from "react";
import { Buttons } from "../buttons/buttons";

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const formatTime = (time) => {
    let hour   = Math.floor((time / 60 / 60) % 24);
    let minute = Math.floor((time / 60) % 60);
    let second = Math.floor(time % 60);

    hour   = hour   < 10 ? "0" + hour   : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    return hour + ":" + minute + ":" + second;
  };

  const timer = useRef();

  useEffect(() => {
    if (isPaused) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 0);
    }

    return () => clearInterval(timer.current);
  }, [isPaused]);

  const resetWatch = () => {
    setTime(0);
  };

  const pauseAndContinueWatch = () => {
    if (isPaused) clearInterval(timer.current);
    setIsPaused(!isPaused);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-slate-950 to-transparent rounded-xl p-5 shadow-lg">
        <span className="text-7xl text-white">{formatTime(time)}</span>
      </div>
      <div className="flex gap-5">
        <Buttons
          text={isPaused ? "Pausar" : "Continuar"}
          action={pauseAndContinueWatch}
        />
        <Buttons text="Reiniciar" action={resetWatch} />
      </div>
    </>
  );
}
