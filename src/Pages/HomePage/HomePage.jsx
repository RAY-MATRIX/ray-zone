import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

import LoginForm from '../../components/Login/LoginForm';

const Container = styled(Box)({
  textAlign: 'center',
});
const Title = styled('h1')({
  color: '#fff',
  marginBottom: '60px',
  fontSize: '2.2em',
});
const HomePage = () => {
  return (
    <Container>
      <Title>Welcome</Title>
      <LoginForm />
    </Container>
  );
};
export default HomePage;
