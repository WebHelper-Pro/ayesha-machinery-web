"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({
  value,
  suffix = "",
  duration = 1500,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <span className="counter">
      {count}
      {suffix}
    </span>
  );
}
