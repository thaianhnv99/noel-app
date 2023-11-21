/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useMemo, useState } from "react";

type Timer = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  timeLeft: boolean;
};
const TimeCount = () => {
  const currentDate = new Date();
  const dateE = new Date(currentDate.getFullYear(), 11, 25);
  const dateEvent = useMemo(() => {
    if (currentDate.getTime() < dateE.getTime()) {
      return dateE;
    } else {
      return new Date(currentDate.getFullYear() + 1, 11, 25);
    }
  }, [currentDate, dateE]);

  const [countTime, setCountTime] = useState<Timer | null>(null);
  const handleGetCountTime = useCallback(() => {
    const timeLeft =
      dateEvent.getTime() >= currentDate.getTime()
        ? dateEvent.getTime() - currentDate.getTime()
        : 0;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)).toString();
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ).toString();
    const minutes = Math.floor(
      (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    ).toString();
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString();

    setCountTime({
      days,
      hours,
      minutes,
      seconds,
      timeLeft: !!timeLeft,
    });
  }, [currentDate, dateEvent]);

  const message = useMemo(() => {
    if (!countTime) {
      return "";
    }

    if (countTime && !countTime.timeLeft) {
      return "Merry christmas";
    } else {
      return `${countTime?.days} days, ${countTime?.hours} hours, ${countTime?.minutes} minutes, ${countTime?.seconds} second`;
    }
  }, [countTime]);

  useEffect(() => {
    const time = setInterval(handleGetCountTime, 1000);
    return () => {
      clearInterval(time);
    };
  }, [handleGetCountTime]);

  return (
    <Box
      sx={{
        marginTop: "1rem",
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
};

export default TimeCount;
