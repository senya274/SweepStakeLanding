import React, { useState, useEffect } from 'react';
import styles from "./Timer.module.css"
function Timer() {
  const [seconds, setSeconds] = useState(24 * 60 * 60);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  useEffect(() => {
    const interval = setInterval(() => {
      const colors = ['	#FFA500', '#D2691E'];
      const colorIndex = Math.floor(Math.random() * colors.length);
      setBackgroundColor(colors[colorIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  const hours = formatTime(Math.floor(seconds / 3600));
  const minutes = formatTime(Math.floor((seconds % 3600) / 60));
  const formattedSeconds = formatTime(seconds % 60);

  return (
    <div style={{ backgroundColor }} className={styles.timer_container}>
      <h2 className={styles.timer_offer}>Ограниченное предложение, осталось времени: {hours}:{minutes}:{formattedSeconds}</h2>
    </div>

  );
}

export default Timer;