import { styled } from '@mui/system';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

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

const FooterContainer = styled(Box)({
  fontSize: '1rem',
  lineHeight: '2rem',
  textAlign: 'center',
  padding: '10px',
  color: '#fff',
});
export default function Layout({ children }) {
  const year = new Date().getFullYear();

  return (
    <BodyContainer>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <FooterContainer>
        Copyright © {year} <br /> Designed for Ashely Zheng
      </FooterContainer>
    </BodyContainer>
  );
}
