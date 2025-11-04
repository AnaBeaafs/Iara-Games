import { Link } from 'react-router-dom';
import styles from './GameCard.module.css';

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.id}`} className={styles.card}>
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className={styles.image}
        onError={(e) => e.target.src = 'https://via.placeholder.com/300x200?text=Jogo'}
      />
      <h3 className={styles.title}>{game.title}</h3>
      <p className={styles.platform}>{game.platform}</p>
    </Link>
  );
};

export default GameCard;