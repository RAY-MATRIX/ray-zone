import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Container = styled(Box)({
  textAlign: 'center',
});
const Title = styled('h1')(({ theme }) => ({
  color: `${theme.palette.white.main}`,
  marginBottom: '20px',
  fontSize: '2em',
  a: {
    color: `${theme.palette.pink.main}`,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
}));
// const SubTitle = styled('h1')(({ theme }) => ({
//   color: `${theme.palette.white.main}`,
//   marginBottom: '10px',
//   fontSize: '1.5em',
//   span: {
//     color: `${theme.palette.red.main}`,
//   },
// }));
const HomePage = () => {
  return (
    <Container>
      {/* <Title>Welcome</Title> */}
      <Title>
        Do U wanna <br />
        <a href="/games/create">Create Your Own Card Game?</a>
      </Title>
    </Container>
  );
};
export default HomePage;
