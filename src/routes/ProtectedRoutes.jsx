import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateCardPage from '../Pages/CreateCardPage';
import CreateGamePage from '../Pages/CreateGamePage';
import GamesPage from '../Pages/GamesPage';
import CardsPage from '../Pages/CardsPage';

import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';
import TestPage from '../Pages/TestPage/TestPage';
import Layout from '../components/ui/Layout';

const ProtectedRoutes = () => {
  // const { isLogin } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/games" element={<GamesPage />} />
          <Route exact path="/game" element={<GamePage />} />
          <Route exact path="/cards" element={<CardsPage />} />
          <Route exact path="/cards/create" element={<CreateCardPage />} />
          <Route exact path="/games/create" element={<CreateGamePage />} />
          <Route exact path="/test" element={<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
