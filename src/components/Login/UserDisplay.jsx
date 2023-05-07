import { Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import userSlice from '../../store/user/userSlice';
import { useNavigate } from 'react-router-dom';

const UserContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '20px',
  top: '14px',
  minWidth: '150px',
  textAlign: 'right',
  '& *': {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: '2rem',
  },
}));

const DropdownList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
}));

const DropdownItem = styled('li')(({ theme }) => ({}));

const UserLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  textDecoration: 'none',
  color: `${theme.palette.white.main}`,
  '&:hover': {
    color: `${theme.palette.red.main}`,
  },
}));

export const UserDisplay = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = { email: '123' };

  const handleLogOut = () => {
    // dispatch(userSlice.actions.clearUser());
    navigate('/');
  };

  return (
    <>
      {user && (
        <UserContainer onMouseLeave={() => setShowDropdown(false)}>
          <UserLink onMouseEnter={() => setShowDropdown(true)}>
            Hello, {user.email}
          </UserLink>
          {showDropdown && (
            <DropdownList>
              <DropdownItem>
                <UserLink onClick={handleLogOut}>Log out</UserLink>
              </DropdownItem>
            </DropdownList>
          )}
        </UserContainer>
      )}
    </>
  );
};
