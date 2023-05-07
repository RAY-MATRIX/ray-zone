import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { UserDisplay } from '../Login/UserDisplay';

const HeaderMenuBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

const MenuContainer = styled('ul')(({ theme }) => ({
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  justifyContent: 'center',
  width: '100%',
  fontSize: '1.125rem',
  lineHeight: '2rem',
  textTransform: 'capitalize',
  color: `${theme.palette.white.main}`,
}));

const MenuItem = styled('li')({
  display: 'flex',
  justifyContent: 'center',
});

const LinkItem = styled('a')(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  '&:hover': {
    color: `${theme.palette.red.main}`,
  },
}));
const CustomToolbar = styled(Toolbar)({
  padding: '10px 0',
});
const UserMenu = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <LinkItem href="/" title="Explore games">
          Home
        </LinkItem>
      </MenuItem>
      <MenuItem>
        <LinkItem href="/games" title="Explore games">
          Games
        </LinkItem>
      </MenuItem>
      <MenuItem>
        <LinkItem href="/cards" title="Explore cards">
          Cards
        </LinkItem>
      </MenuItem>
    </MenuContainer>
  );
};

export default function Header() {
  const user = useSelector((state) => state.users);

  return (
    <>
      <HeaderMenuBar position="static">
        <CustomToolbar>
          {/* {user && <UserMenu />} */}
          <UserMenu />
          <UserDisplay />
        </CustomToolbar>
      </HeaderMenuBar>
    </>
  );
}
