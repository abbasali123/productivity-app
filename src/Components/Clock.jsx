import { useState, useEffect } from "react";
import { useTime } from "../Context/time-context.js";

function Clock() {
  const { displayTime } = useTime();
  return <h1 className="clock">{displayTime.slice(0, 5)}</h1>;
}

export { Clock };
