import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { UserDisplay } from '../Login/UserDisplay';
import UserMenu from './UserMenu';

const HeaderMenuBar = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: 'transparent',
});

const CustomToolbar = styled(Toolbar)({
  padding: '10px 0',
});

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
