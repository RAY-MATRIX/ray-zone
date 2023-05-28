import { Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { clearUser } from '../../store/auth/authSlice';
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
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <>
      {user.isLoggedIn ? (
        <UserContainer onMouseLeave={() => setShowDropdown(false)}>
          <UserLink onMouseEnter={() => setShowDropdown(true)}>
            Hello, {user.role}
          </UserLink>
          {showDropdown && (
            <DropdownList>
              <DropdownItem>
                <UserLink onClick={handleLogOut}>Log Out</UserLink>
              </DropdownItem>
            </DropdownList>
          )}
        </UserContainer>
      ) : (
        <UserContainer>
          <UserLink href="/login">Sign In</UserLink>
        </UserContainer>
      )}
    </>
  );
};
