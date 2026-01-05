import React, { useEffect, useState } from "react";
import "./style.css";

function TypeWritter({ text, delay = 100, infinite = false, onComplete }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else if (!completed) {
      setCompleted(true);
      if (onComplete) onComplete();

      if (infinite) {
        setTimeout(() => {
          setCurrentText("");
          setCurrentIndex(0);
          setCompleted(false);
        }, 1500);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay, infinite, onComplete, completed]);

  return <span className="type-writter-text">{currentText}</span>;
}

export default TypeWritter;
