import { useState } from "react";
import { QuestionRender } from "../QuestionRender/QuestionRender";
import { nextQuestion } from "../utils/nextQuestion";
import { questions } from "./../utils/questions";
import classes from "../Question/Question.module.css";

export const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(
    nextQuestion(questions)
  );

  const [isVisible, setIsVisible] = useState(false);

  const changeQuestion = () => {
    setCurrentQuestion(nextQuestion(questions));
    setIsVisible(false);
  };

  const checkQuestion = () => {
    setIsVisible(true);
  };

  return (
    <>
      <QuestionRender key={currentQuestion.id} {...currentQuestion} />
      <div>
        {isVisible && (
          <h3 className={classes.correctAnswerSt}>
            {currentQuestion.correctAnswer}
          </h3>
        )}
        <button className={classes.buttonStyle} onClick={checkQuestion}>
          Check Answer
        </button>

        <button className={classes.buttonStyle} onClick={changeQuestion}>
          Next Question
        </button>
      </div>

      <h3>{}</h3>
    </>
  );
};
