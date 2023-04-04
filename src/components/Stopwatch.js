import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isStarted, setStart] = useState(false);
  const timerRef = useRef();
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => setTimer((prevTimer += 1)));
    }, 1000);
    setStart(true);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setStart(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = ngull;
    setTimer(0);
  };

  return (
    <div className="stopwatch">
      <div>
        {Math.floor(timer / 3600)} hh :: {Math.floor(timer / 60)} mm ::{" "}
        {Math.floor(timer % 60)} ss
      </div>
      <div className="stopwatch-control">
        <button
          onClick={(_) => startTimer()}
          disabled={isStarted}
          className="primary"
        >
          Start
        </button>
        <button
          onClick={(_) => stopTimer()}
          disabled={!isStarted}
          className="primary"
        >
          Stop
        </button>
        {
          <button onClick={(_) => resetTimer()} className="primary">
            Reset
          </button>
        }
      </div>
    </div>
  );
};

export default StopWatch;
