import { useState, useEffect } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard.jsx';
import { API_BASE_URL, FREE_TO_GAME } from '../constants.js';
import styles from './GamesPage.module.css';

const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState('');

  // Gêneros reais da API (testados!)
  const genres = [
    'shooter', 'mmorpg', 'moba', 'strategy', 'battle-royale',
    'mmofps', 'sports', 'racing', 'mmoarpg', 'arpg', 'mmorts',
    'card-game', 'fighting', 'social', 'action-rpg', 'dungeon-crawler'
  ];

  useEffect(() => {
    setLoading(true);
    let url = `${FREE_TO_GAME}/games?sort-by=popularity`;
    if (selectedGenre) url += `&category=${selectedGenre}`;
    const proxyUrl = `${API_BASE_URL}${encodeURIComponent(url)}`;

    axios.get(proxyUrl)
      .then(res => {
        setGames(res.data.slice(0, 200));
        setLoading(false);
      })
      .catch(() => {
        setGames([]);
        setLoading(false);
      });
  }, [selectedGenre]);

  return (
    <div className={styles.container}>
      <h1>Conheça novos jogos</h1>

      <div className={styles.filter}>
        <label>Filtrar por Gênero:</label>
        <select 
          value={selectedGenre} 
          onChange={(e) => setSelectedGenre(e.target.value)}
          className={styles.select}
        >
          <option value="">Todos os Jogos</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre.charAt(0).toUpperCase() + genre.slice(1).replace(/-/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className={styles.loading}>Carregando jogos...</div>
      ) : games.length === 0 ? (
        <div className={styles.noGames}>Nenhum jogo encontrado.</div>
      ) : (
        <div className={styles.grid}>
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GamesPage;