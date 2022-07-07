import styled from 'styled-components';
import { Typography } from '../Typography';

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledTypography = styled(Typography)<{ isDisabled: boolean }>`
  color: ${({ theme, isDisabled }) => isDisabled && theme.colors.disabled};
`;

export const StyledButton = styled.button<{ isDisabled: boolean }>`
  width: 140px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isDisabled }) => !isDisabled && theme.colors.backgroundWithHover};

    ${StyledTypography} {
      color: ${({ theme, isDisabled }) => !isDisabled && theme.colors.secondaryTextWithHover};
    }
  }
`;
