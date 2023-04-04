import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(300);
  const timerRef = useRef();
  const minutes = Math.floor(timer / 60);
  const seconds = Math.floor(timer % 60);
  
  useEffect(()=>{
      if(timer < 0){
          clearInterval(timerRef.current);
      }
  },[timer])

  const startTimer = () => {
      if(timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTimer((prevValue) => (prevValue -= 1));
    },1000);
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    // setStart(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimer(300);
  };

  return (
    <div>
        {console.log(timerRef)}
      <div>Timer</div>
      <div>
        {minutes} min :: {seconds} ss
      </div>
      <div className="stopwatch-control">
        <button onClick={(_) => startTimer()} className="primary">
          Start
        </button>
        <button
          onClick={(_) => stopTimer()}
          //   disabled={!isStarted}
          className="primary"
        >
          Stop
        </button>
        <button onClick={(_) => resetTimer()} className="primary">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
