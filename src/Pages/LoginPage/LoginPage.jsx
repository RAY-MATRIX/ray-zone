import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import LoginForm from '../../components/Login/LoginForm';
import { useSelector } from 'react-redux';

const Container = styled(Box)({
  textAlign: 'center',
});
const Title = styled('h1')({
  color: '#fff',
  marginBottom: '60px',
  fontSize: '2.2em',
});

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  console.log(
    'user',
    useSelector((state) => state.auth)
  );

  return (
    <Container>
      {isLoggedIn ? (
        <>
          <Title>You have logged in, Do you want to logout?</Title>
        </>
      ) : (
        <>
          <Title>Welcome</Title>
          <LoginForm />
        </>
      )}
    </Container>
  );
};
export default LoginPage;
