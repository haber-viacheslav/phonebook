import { MainNavMenu, StyledLink } from './MainNav.styled.jsx';
import { useAuth } from 'hooks/useAuth.js';
export const MainNav = () => {
  const { isLoggedIn } = useAuth();
  return (
    <MainNavMenu>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </MainNavMenu>
  );
};
