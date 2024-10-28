import  { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { FiClock } from 'react-icons/fi';
import PropTypes from 'prop-types'; // Import de PropTypes
import '../assets/styles/Pro.css';

const Calcul= ({ onAnswersStateChange }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(5);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const timerRef = useRef(null);

  const questions = useMemo(() => [
    {
      question: 'Combien font 5 + 3 ?',
      options: ['4', '5', '8'],
      answer: '8',
    },
    {
      question: 'Quel est le résultat de 4 x 2 ?',
      options: ['4', '8', '7'],
      answer: '8',
    },
    {
      question: 'Quel est le résultat de 4 x 1 ?',
      options: ['20', '24', '4'],
      answer: '4',
    },
  ], []);

  const handleOptionClick = useCallback((selectedOption) => {
    clearInterval(timerRef.current);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setFeedback('Bravo, bonne réponse !');
    } else {
      setFeedback('Dommage, essaie encore !');
      setIncorrectAnswer(true);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setTimer(5);
    } else {
      onAnswersStateChange(score === questions.length, incorrectAnswer);
    }
  }, [currentQuestionIndex, questions, score, incorrectAnswer, onAnswersStateChange]);

  useEffect(() => {
    if (timer === 0) {
      handleOptionClick(null);
    }
  }, [timer, handleOptionClick]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(timerRef.current);
          return 5;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container">
      <div className="question-container">
        <p>{currentQuestion.question}</p>
        <div id="options">
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
          ))}
        </div>
        <p>Score : {score}</p>
        <p>{feedback}</p>
        <div className="timer">
          <FiClock />
          {timer}
        </div>
      </div>
    </div>
  );
};

// Validation des types de propriétés
Calcul.propTypes = {
  onAnswersStateChange: PropTypes.func.isRequired,
};

export default Calcul;
