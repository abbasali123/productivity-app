import { useState, useEffect } from "react";
import { useTime } from "../Context/time-context.js";

function Greet() {
  const { phaseOfDay } = useTime();
  const [greeting, setGreeting] = useState("");
  const username = localStorage.getItem("username");

  useEffect(() => {
    if (phaseOfDay === "morning") {
      setGreeting("Good Morning");
    } else if (phaseOfDay === "afternoon") {
      setGreeting("Good Afternoon");
    } else if (phaseOfDay === "evening") {
      setGreeting("Have a Great Evening");
    } else {
      setGreeting("Such a good day it was! Have a Great Night");
    }
  }, [phaseOfDay]);

  return (
    <h1 className="greeting">
      {greeting}, {username}
    </h1>
  );
}

export { Greet };
