import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px auto 70px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 62px;
  }
`;
