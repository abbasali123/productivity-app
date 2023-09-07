import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const defaultTimeValue = new Date();

const TimeContext = createContext(defaultTimeValue);

const newTime = new Date();
const stdTime = newTime.toLocaleTimeString("en-GB");

function changePhase() {
  if (5 <= Number(stdTime.slice(0, 2)) && Number(stdTime.slice(0, 2)) < 12) {
    return "morning";
  }
  if (12 <= Number(stdTime.slice(0, 2)) && Number(stdTime.slice(0, 2)) < 17) {
    return "afternoon";
  }
  if (17 <= Number(stdTime.slice(0, 2)) && Number(stdTime.slice(0, 2)) < 20) {
    return "evening";
  }
  if (20 <= Number(stdTime.slice(0, 2)) || Number(stdTime.slice(0, 2)) < 5) {
    return "night";
  }
}

function TimeProvider({ children }) {
  const [displayTime, setDisplayTime] = useState("");
  const [phaseOfDay, setPhaseOfDay] = useState(changePhase);

  setInterval(() => {
    const newTime = new Date();
    setDisplayTime(newTime.toLocaleTimeString("en-GB"));
    setPhaseOfDay(changePhase());
  }, 1000);

  return (
    <TimeContext.Provider value={{ displayTime, phaseOfDay }}>
      {children}
    </TimeContext.Provider>
  );
}

const useTime = () => useContext(TimeContext);

export { TimeProvider, useTime };
