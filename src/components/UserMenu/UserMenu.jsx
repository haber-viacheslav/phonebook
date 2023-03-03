import { Box } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/auth/authService';
// import { clearAuthHeader } from 'redux/auth/utility/authUtility';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(userLogout());
  return (
    <Box>
      <p>{user.name}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Box>
  );
};

// export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div>
//       <p>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(clearAuthHeader())}>
//         Logout
//       </button>
//     </div>
//   );
// };
