// import Game from "./Game";
import './css/style.scss';
import Layout from './components/ui/layouts';
import ProtectedRoutes from './routes/ProtectedRoutes';

function App() {
  return (
    <Layout>
      <ProtectedRoutes />
    </Layout>
  );
}

export default App;
