import { useEffect, useState } from "react";
import TimerIcon from "../assets/Icons/TimerIcon";
// import TimerIcon from "./assets/Icons/TimerIcon";

export default function Timer({ onEnd }) {
  const [timeLeft, setTimeLeft] = useState(120); // 2 daqiqa = 120 soniya
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd(); // taymer tugaganda chegirmalarni o‘chiradi
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // 30 soniyadan kam bo‘lsa — har soniyada rang almashadi
    if (timeLeft <= 30) {
      setIsRed((prev) => !prev);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <header className="header">
      <h2 className="header-title">Успейте открыть пробную неделю</h2>
      <div
        className={`timer-wrap ${
          timeLeft <= 30 ? (isRed ? "red" : "white") : ""
        }`}
      >
        <TimerIcon />
        <span>
          {minutes} : {seconds}
        </span>
        <TimerIcon />
      </div>
    </header>
  );
}
