import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const keys1 = ["ק", "ר", "א", "ט", "ו", "פ"];
  const keys2 = ["ש", "ד", "ג", "כ", "ע", "י", "ח", "ל"];
  const keys3 = ["ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת"];

  const {
    board,
    disabledLetters,
    currAttempt,
    gameOver,
    onSelectLetter,
    onEnter,
    onDelete,
    letterPos,
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key === key) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key === key) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key === key) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyVal={"מחק"} bigKey />
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="line3">
        {keys3.map((key) => {
          return <Key keyVal={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <Key keyVal={"שליחה"} bigKey />
    </div>
  );
}

export default Keyboard;
