import React, { useState, useEffect } from "react";



export default function Timer({ added, setTextColor }) {
  const [ElapsedTime, SetElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  
  
  const addedAt = new Date(added);
  
  
  useEffect(() => {
    setRunning(true);
    let interval;
    if (running) {
      interval = setInterval(() => {
        SetElapsedTime((Date.now() / 1000) - (addedAt.getTime() / 1000) );
      }, 750
      );
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [running]);

  let seconds = Math.floor(ElapsedTime % 60);
  let minutes = Math.floor((ElapsedTime / 60) % 60);
  let hours = Math.floor((ElapsedTime / 3600) % 24);
  
  const textFixer = (input) => input < 10 ? input = ("0" + input) : input;
  

  if(seconds > 30 && minutes < 1){
    setTextColor("#b88700");
  }else if( minutes >= 1){
    setTextColor("#b84b30");
  } else {
    setTextColor("#189927");
  }


  return <>
  <span hidden={hours > 0 ? false : true}>{textFixer(hours)}:</span>
  <span>{textFixer(minutes)}:</span>
  <span>{textFixer(seconds)}</span>
  </>;
}


