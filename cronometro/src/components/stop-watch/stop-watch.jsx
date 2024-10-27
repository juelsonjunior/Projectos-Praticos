import { useState } from "react";
import { Buttons } from "../buttons/buttons";

export function StopWatch() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const formatTime = (val) => {
    if (val > 9) {
      return val;
    } else {
      return "0" + val;
    }
  };

  const stopWatch = () => {
    if (!isPaused) {
      setSecond(second + 1);
      if (second >= 59) {
        setSecond(0);
        setMinute(minute + 1);

        if (minute >= 59) {
          setMinute(0);
          setHour(hour + 1);

          if (hour >= 23) {
            setHour(0);
            setMinute(0);
            setSecond(0);
          }
        }
      }
    }
  };

  const timeoutId = setTimeout(() => {
    stopWatch();
  }, 1000);

  const pauseWatch = () => {
    setIsPaused(true);
    clearTimeout(timeoutId);
  };

  const continueWatch = () => {
    setIsPaused(false);
    stopWatch();
  };

  const resetWatch = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsPaused(true);
    clearTimeout(timeoutId);
    stopWatch();
  };
  return (
    <>
      <div className="bg-gradient-to-b from-slate-950 to-transparent rounded-xl p-5 shadow-lg">
        <span className="text-7xl text-white">
          {formatTime(hour)} : {formatTime(minute)} : {formatTime(second)}
        </span>
      </div>
      <div className="flex gap-5">
        <Buttons text="Pausar" action={pauseWatch} />
        <Buttons text="Continuar" action={continueWatch} />
        <Buttons text="Reiniciar" action={resetWatch} />
      </div>
    </>
  );
}
