import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamePage from '../Pages/GamePage';
import HomePage from '../Pages/HomePage';

const ProtectedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />;
        <Route exact path="/game" element={<GamePage />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default ProtectedRoutes;
