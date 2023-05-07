import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CreateCardPage from '../Pages/CreateCardPage';
// import CreateGamePage from '../Pages/CreateGamePage';
// import GamesPage from '../Pages/GamesPage';
// import CardsPage from '../Pages/CardsPage';

// import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';
import ProjectsPage from '../Pages/ProjectsPage';

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route exact path="/" element={<ProjectsPage />} />

        {/* <Route exact path="/games" element={<GamesPage />} /> */}
        <Route exact path="/game" element={<GamePage />} />
        {/* <Route exact path="/cards" element={<CardsPage />} />
        <Route exact path="/cards/create" element={<CreateCardPage />} />
        <Route exact path="/games/create" element={<CreateGamePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
