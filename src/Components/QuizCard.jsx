import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import questionsData from "../data";
import "./QuizCard.css";

const QuizCard = () => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);


  useEffect(() => {
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, 10));
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  if (questions.length === 0) return <p className="text-white">Loading...</p>;

  return (
    <Card className="quiz-card p-4 text-center">
      {!finished ? (
        <>
          {/* Progress: 1/10 */}
          <p className="text-light fs-5 mb-2">
            Question {current + 1} / {questions.length}
          </p>

          <h4 className="fw-bold text-white mb-4">
            {questions[current].question}
          </h4>

          {questions[current].options.map((option, i) => (
            <Button
              key={i}
              className="quiz-btn w-100 mb-3"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </>
      ) : (
        <>
          <h4 className="fw-bold text-white mb-4">🎉 Quiz Finished!</h4>
          <p className="fs-4 text-white">
            Your Score: {score} / {questions.length}
          </p>
          <Button className="restart-btn w-100" onClick={restartQuiz}>
            Restart Quiz
          </Button>
        </>
      )}
    </Card>
  );
};

export default QuizCard;
