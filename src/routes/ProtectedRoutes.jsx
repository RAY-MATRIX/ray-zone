import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import CreateCardPage from '../Pages/CreateCardPage';
import CreateGamePage from '../Pages/CreateGamePage';
import GamesPage from '../Pages/GamesPage';
import CardsPage from '../Pages/CardsPage';
import HomePage from '../Pages/HomePage';
import GamePage from '../Pages/GamePage';
import TestPage from '../Pages/TestPage/TestPage';
import Layout from '../components/ui/Layout';
import ProjectsPage from '../Pages/ProjectsPage';
import LoginPage from '../Pages/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage';

const ProtectedRoutes = () => {
  // const { isLogin } = ;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* {!isLogin && <Route path="/" element={<HomePage />} />}
          {isLogin && <Route path="/" element={<Navigate to="/games" replace />} />} */}
          <Route path="/" element={<HomePage />} />

          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/games" element={<GamesPage />} />
          <Route exact path="/game/:id" element={<GamePage />} />
          <Route exact path="/cards" element={<CardsPage />} />
          <Route exact path="/cards/create" element={<CreateCardPage />} />
          <Route exact path="/games/create" element={<CreateGamePage />} />
          <Route exact path="/test" element={<TestPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
