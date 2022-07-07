import styled from 'styled-components';
import { Typography } from '../../components';

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const TextRow = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  gap: 16px;
`;

export const StyledFieldName = styled(Typography)`
  min-width: 80px;
`;

export const StyledDetailsTypography = styled(Typography)`
  display: block;
  width: 220px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
