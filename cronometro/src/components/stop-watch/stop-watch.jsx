import { useEffect, useRef, useState } from "react";
import { Buttons } from "../buttons/buttons";

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const formatTime = (time) => {
    let hour = Math.floor((time / 60 / 60) % 24);
    let minute = Math.floor((time / 60) % 60);
    let second = Math.floor(time % 60);

    let formatH = hour.toString().padStart(2, '0')
    let formatM = minute.toString().padStart(2, '0')
    let formatS = second.toString().padStart(2, '0')

    return formatH + " : " + formatM + " : " + formatS;
  };

  const timer = useRef();

  useEffect(() => {
    if (isPaused) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [isPaused]);

  const resetWatch = () => {
    setTime(0);
  };

  const pauseAndContinueWatch = () => {
    isPaused && clearInterval(timer.current);
    setIsPaused(!isPaused);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-slate-950 to-transparent rounded-xl p-5 shadow-lg">
        <span className={`text-7xl transition-all duration-300 ease-in-out ${isPaused ? `text-white` : `text-gray-500`}`}>{formatTime(time)}</span>
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
