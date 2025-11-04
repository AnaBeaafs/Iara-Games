import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import GamesPage from './pages/GamesPage.jsx';
import GameDetails from './pages/GameDetails.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<GamesPage />} />
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;