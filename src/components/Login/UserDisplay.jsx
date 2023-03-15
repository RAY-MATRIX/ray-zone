import { Link } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import userSlice from '../../store/user/userSlice';

const UserContainer = styled('div')(({ theme }) => ({
  fontWeight: 500,
  fontSize: '18px',
  position: 'absolute',
  padding: '10px',
  right: '0',
  top: '0',
  minWidth: '150px',
  textAlign: 'right',
}));

const DropdownList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
}));

const DropdownItem = styled('li')(({ theme }) => ({}));

const UserLink = styled(Link)(({ theme }) => ({
  cursor: 'pointer',
  //   textDecoration: 'none',
}));

export const UserDisplay = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  //   const user = useSelector((state) => state.user);
  const user = { email: '123' };
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userSlice.actions.clearUser());
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
