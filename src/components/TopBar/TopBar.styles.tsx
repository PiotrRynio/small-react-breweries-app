import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  height: ${({ theme }) => theme.sizes.topBarHeight.default};
  width: 100%;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.topBarBackground};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: ${({ theme }) => theme.sizes.topBarHeight.md};
  }
`;
