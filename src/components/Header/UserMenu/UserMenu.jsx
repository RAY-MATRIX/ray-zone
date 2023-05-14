import { styled } from '@mui/system';

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

const MenuItem = styled('a')(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 600,
  '&:hover': {
    color: `${theme.palette.red.main}`,
  },
}));

const UserMenu = () => {
  return (
    <MenuContainer>
      <MenuItem href="/" title="Explore games">
        Home
      </MenuItem>
      <MenuItem href="/games" title="Explore games">
        Games
      </MenuItem>
      <MenuItem href="/cards" title="Explore cards">
        Cards
      </MenuItem>
      <MenuItem href="/projects" title="Explore projects">
        Projects
      </MenuItem>
    </MenuContainer>
  );
};
export default UserMenu;
