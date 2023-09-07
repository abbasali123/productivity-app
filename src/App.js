import "./App.css";
import {
  Clock,
  Greet,
  Focus,
  UserOnboarding,
  Quote,
  Weather,
} from "./Components/index.js";
import { useState } from "react";
import { useTheme } from "./Context/theme-context";

export default function App() {
  const nameOfUser = localStorage.getItem("username");

  const { wallpaper } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("${wallpaper}")`,
      }}
    >
      <Weather />
      {nameOfUser === null ? (
        <main className="main">
          <UserOnboarding />
        </main>
      ) : (
        <main className="main">
          <Clock />
          <Greet />
          <Focus />
        </main>
      )}

      <footer className="footer">
        {nameOfUser !== null ? <Quote /> : null}
      </footer>
    </div>
  );
}
