// src/hooks/useCountdown.js
import { intervalToDuration, isPast } from 'date-fns';
import { useState, useEffect } from 'react';

const useCountdown = (targetDate: any) => {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeRemaining;
};

function calculateTimeRemaining(targetDate: any) {
  const now = new Date();

  if (isPast(targetDate)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  const duration = intervalToDuration({ start: now, end: targetDate });

  return {
    days: duration.days || 0,
    hours: duration.hours || 0,
    minutes: duration.minutes || 0,
    seconds: duration.seconds || 0,
    isExpired: false,
  };
}

export default useCountdown;
