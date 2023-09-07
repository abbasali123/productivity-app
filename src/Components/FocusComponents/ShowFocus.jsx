import { useState } from "react";

function ShowFocus(props) {
  const focusForToday = props.focusForDay;
  const [focusStatus, setFocusStatus] = useState(false);

  function editFocus() {
    localStorage.removeItem("focus-of-day");
  }

  return (
    <div className="focus__display">
      <section className="focus__details">
        <input type="checkbox" onChange={() => setFocusStatus(!focusStatus)} />
        <h2
          style={
            focusStatus
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          Today I will {focusForToday}
        </h2>
        <button className="focus__edit" onClick={editFocus}>
          <i>✎</i>
        </button>
      </section>
      {focusStatus ? (
        <h3 className="focus__complete">Hurray! Keep it up.</h3>
      ) : (
        <h3 className="focus__complete">You can do it. I believe in you.</h3>
      )}
    </div>
  );
}

export { ShowFocus };
