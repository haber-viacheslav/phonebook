import { AuthNavMenu, StyledLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthNavMenu>
      <StyledLink to="/register" end>
        Register
      </StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthNavMenu>
  );
};
