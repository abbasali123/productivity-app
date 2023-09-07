import { useState } from "react";

function FocusInput(props) {
  const [focus, setFocus] = useState("");

  function storeFocus(e) {
    if (e.key === "Enter") {
      localStorage.setItem("focus-of-day", focus);
    }
  }

  return (
    <div className="focus__input">
      <input
        type="text"
        placeholder="What is your main focus for the day?"
        onChange={(e) => {
          setFocus(e.target.value);
        }}
        onKeyUp={(e) => {
          storeFocus(e);
        }}
      />
    </div>
  );
}

export { FocusInput };
