import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Calcul from './components/Calcul';
import FeedCorrect from './components/FeedCorrect';
import FeedFaux from './components/FeedFaux';

function App() {
  const [gameState, setGameState] = useState('playing');

  const handleAnswersStateChange = (areAllCorrect, areAllIncorrect) => {
    if (areAllCorrect) {
      setGameState('correct');
    } else if (areAllIncorrect) {
      setGameState('incorrect');
    }
  };

  const handleRestartGame = () => {
    setGameState('playing');
  };

  return (
    <div>
      {gameState === 'playing' && <Calcul onAnswersStateChange={handleAnswersStateChange} />}
      {gameState === 'correct' && <FeedCorrect handleRestartGame={handleRestartGame} />}
      {gameState === 'incorrect' && <FeedFaux handleRestartGame={handleRestartGame} />}
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
