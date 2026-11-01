import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(() => new Date().toTimeString().split(" ")[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(" ")[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time}</span>;
}

export default Clock;

