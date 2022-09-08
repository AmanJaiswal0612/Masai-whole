import { useEffect, useRef, useState } from "react";
import styles from "./GTimer.module.css";

export const GTimer = () => {
  const [second, setSecond] = useState(0);
  const [running, setRunning] = useState(false);
  const [miliseconds, setmiliSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  let minuteid = useRef();
  let secondid = useRef();
  let milisecondid = useRef();
  useEffect(() => {
    if (running === true) {
      startTime();
    }
    return pauseTime;
  }, []);

  const startTime = () => {
    if (running === true) {
      return;
    }
    secondid.current = setInterval(() => {
      setSecond((prev) => {
        if (prev === 60) {
          prev = 0;
        }
        return prev + 1;
      });
    }, 1000);
    milisecondid.current = setInterval(() => {
      setmiliSeconds((prev) => {
        if (prev === 100) {
          prev = 0;
        }
        return prev + 1;
      });
    }, 10);
    minuteid.current = setInterval(() => {
      setMinute((prev) => prev + 1);
    }, 60000);
    setRunning(true);
  };
  const pauseTime = () => {
    clearInterval(minuteid.current);
    clearInterval(secondid.current);
    clearInterval(milisecondid.current);
    setRunning(false);
  };
  const clearTime = () => {
    clearInterval(minuteid.current);
    clearInterval(secondid.current);
    clearInterval(milisecondid.current);
    setMinute(0);
    setmiliSeconds(0);
    setSecond(0);
    setRunning(false);
  };

  return (
    <>
      <h1 className={styles.header}>Google Timer</h1>
      <div className={styles.container}>
        <div className={styles.main}>
          <h1>{minute < 60 ? "0" + minute : minute}</h1>
          <h1>:</h1>
          <h1>{second < 10 ? "0" + second : second}</h1>
          <h1>:</h1>
          <h1>{miliseconds < 10 ? "0" + miliseconds : miliseconds}</h1>
        </div>

        <div className={styles.btn}>
          <button onClick={startTime}>Start</button>
          <button onClick={pauseTime}>Pause</button>
          <button onClick={clearTime}>Reset</button>
        </div>
      </div>
      <p> </p>
    </>
  );
};
