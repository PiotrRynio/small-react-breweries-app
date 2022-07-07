import styled from 'styled-components';
import { Typography } from 'components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const BreweriesList = styled.ul`
  width: 100%;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  list-style: none;
`;

export const StyledNameTypography = styled(Typography)`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BreweriesListItem = styled.li`
  padding: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundWithHover};

    ${StyledNameTypography} {
      color: ${({ theme }) => theme.colors.secondaryTextWithHover};
    }
  }
`;
