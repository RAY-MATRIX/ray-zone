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
import PrivateRoute from './PrivateRoute';

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="test" element={<TestPage />} />

          <Route path="games" element={<PrivateRoute />}>
            <Route path="" element={<GamesPage />} />
            <Route path=":id" element={<GamePage />} />
            <Route path="create" element={<CreateGamePage />} />
          </Route>

          <Route path="cards" element={<PrivateRoute />}>
            <Route path="" element={<CardsPage />} />
            {/* <Route exact path=":id" element={<CardPage />} /> */}
            <Route path="/cards/create" element={<CreateCardPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
