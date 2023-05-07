import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { UserDisplay } from '../Login/UserDisplay';
import { useSelector } from 'react-redux';

const BodyContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: `linear-gradient(${theme.palette.pink.main}, ${theme.palette.purple.main} 60%)`,
}));

const Container = styled(Box)({
  width: '100%',
  maxWidth: '1024px',
  margin: '0 auto',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const HeaderContainer = styled(Box)({
  fontSize: '1rem',
  lineHeight: '2rem',
  padding: '10px',
  color: '#fff',
});

const FooterContainer = styled(Box)({
  fontSize: '1rem',
  lineHeight: '2rem',
  textAlign: 'center',
  padding: '10px',
  color: '#fff',
});
export default function Layout({ children }) {
  const year = new Date().getFullYear();
  const user = useSelector((state) => state.users);

  return (
    <BodyContainer>
      <HeaderContainer>{user && <UserDisplay />}</HeaderContainer>
      <Container>{children}</Container>
      <FooterContainer>
        Copyright © {year} <br /> Designed By Ray
      </FooterContainer>
    </BodyContainer>
  );
}
