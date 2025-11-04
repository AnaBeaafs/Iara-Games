import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, FREE_TO_GAME } from '../constants.js';
import styles from './GameDetails.module.css';

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${API_BASE_URL}${encodeURIComponent(`${FREE_TO_GAME}/game?id=${id}`)}`;
    axios.get(url)
      .then(res => {
        setGame(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (!game) return <div className={styles.error}>Jogo não encontrado.</div>;

  const year = game.release_date ? new Date(game.release_date).getFullYear() : '???';

  return (
    <div className={styles.container}>
      <h1>{game.title}</h1>
      <img src={game.thumbnail} alt={game.title} className={styles.image} />
      <p><strong>Gênero:</strong> {game.genre}</p>
      <p><strong>Plataforma:</strong> {game.platform}</p>
      <p><strong>Ano:</strong> {year}</p>
      <p><strong>Descrição:</strong> {game.short_description}</p>
      <p>
        <a href={game.game_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
          Conhecer
        </a>
      </p>
    </div>
  );
};

export default GameDetails;