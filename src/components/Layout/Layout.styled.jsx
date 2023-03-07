import styled from '@emotion/styled';

export const Main = styled.main`
  min-height: 75vh;
  @media (min-width: 480px) {
    min-height: 80vh;
  }
  @media (min-width: 900px) {
    min-height: 86vh;
  }
`;

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  @media (min-width: 480px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media (min-width: 900px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
