import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, MainNav, StyledLink } from './Layout.styled';
export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <MainNav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </MainNav>
        </Container>
      </Header>
      <Suspense fallback={<p>Loading....</p>}>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};
