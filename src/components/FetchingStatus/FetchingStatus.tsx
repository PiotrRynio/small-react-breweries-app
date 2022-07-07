import { Typography } from '../Typography';
import { Wrapper } from './FetchingStatus.styles';

export type FetchingStatusProps = {
  status: 'error' | 'loading' | 'noResults';
};

export const FetchingStatus = ({ status }: FetchingStatusProps) => {
  switch (status) {
    case 'error':
      return (
        <Wrapper role="status">
          <Typography variant="body1">Api error...</Typography>
          <Typography variant="body2">Try again!</Typography>
        </Wrapper>
      );
    case 'loading':
      return (
        <Wrapper role="status">
          <Typography variant="body1">Loading...</Typography>
        </Wrapper>
      );
    case 'noResults':
      return (
        <Wrapper role="status">
          <Typography variant="body1">No results!</Typography>
          <Typography variant="body2">Search something other</Typography>
        </Wrapper>
      );
  }
};
