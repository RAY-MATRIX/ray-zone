import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCardsPage from '../Pages/CreateCardsPage';
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/game" element={<GamePage />} />
        <Route exact path="/createcards" element={<CreateCardsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
