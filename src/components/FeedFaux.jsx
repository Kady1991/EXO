import PropTypes from 'prop-types';
import '../assets/styles/Incorrect.css';

const FeedFaux = ({ handleRestartGame, handleQuit }) => {
  return (
    <div className="feed-faux-container">
      <p>Dommage, essaie encore !</p>
      <div className="buttons-container">
        <button onClick={handleRestartGame}>Reprendre le jeu</button>
        <button onClick={handleQuit}>Quitter</button>
      </div>
    </div>
  );
};

FeedFaux.propTypes = {
  handleRestartGame: PropTypes.func.isRequired,
  handleQuit: PropTypes.func.isRequired,
};

export default FeedFaux;
