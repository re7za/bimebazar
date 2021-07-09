import { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return {
    reset: () => setCounter(0),
    counter: counter,
  };
};

export default useCounter;
