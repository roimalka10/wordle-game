import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    board,
    setBoard,
    currAttempt,
    gameOver,
    onSelectLetter,
    correctWord,
    onDelete,
  } = useContext(AppContext);

  let correctAnswers;

  if (currAttempt.attempt <= 3) {
    correctAnswers = [
      ":) יפה! ניחשת נכון את המילה",
      "!ידעתי שאת תותחית",
      "רגע רגע רגעע איך כזה מהר??",
    ];
  } else {
    correctAnswers = ["הלכתי להכין פיצה פיתה עד שסיימת"];
    // correctAnswers = [
    //   "הלכתי להכין פיצה פיתה עד שסיימת",
    //   "פעם הבאה לנחש מהר יותר בבקשה",
    // ];
  }

  let wrongAnswers = [
    "לא נורא בוב פעם הבאה נצליח",
    "כל כך קרובבב",
    "איזו מילה של הזויים",
  ];

  let showCorrectAnswer =
    correctAnswers[Math.floor(Math.random() * correctAnswers.length)];

  let showWrongAnswers =
    wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? showCorrectAnswer : showWrongAnswers}</h3>
      <h1>המילה הנכונה היא: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>ניחשת את המילה ב: {currAttempt.attempt} ניחושים</h3>
      )}
      <a className="nextWord" href="/">
        למילה הבאה
      </a>
    </div>
  );
}

export default GameOver;
