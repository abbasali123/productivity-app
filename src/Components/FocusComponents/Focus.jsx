import { useState, useEffect } from "react";
import { FocusInput } from "./FocusInput";
import { ShowFocus } from "./ShowFocus";

function Focus() {
  const focusForDay = localStorage.getItem("focus-of-day");

  return (
    <div className="focus">
      {focusForDay !== null ? (
        <ShowFocus focusForDay={focusForDay} />
      ) : (
        <FocusInput />
      )}
    </div>
  );
}

export { Focus };
