import { useState } from "react";
function UserOnboarding(props) {
  const [name, setName] = useState("");

  function storeName(e) {
    if (e.key === "Enter") {
      localStorage.setItem("username", name);
    }
  }

  return (
    <div className="name__input">
      <h1>Hey! What's your name?</h1>
      <input
        type="text"
        placeholder="John Doe"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyUp={(e) => {
          storeName(e);
        }}
      />
    </div>
  );
}
export { UserOnboarding };
