import PropTypes from 'prop-types';
import '../assets/styles/Correct.css';

const FeedCorrect = ({ handleRestartGame }) => {
  return (
    <div className="feed-correct-container">
      <p>Bravo, tu es tellement intelligent !</p>
      <div className="buttons-container">
        <button onClick={handleRestartGame}>Reprendre le jeu</button>
      </div>
    </div>
  );
};

FeedCorrect.propTypes = {
  handleRestartGame: PropTypes.func.isRequired,
};

export default FeedCorrect;
