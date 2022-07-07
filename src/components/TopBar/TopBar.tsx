import { Logo, Searcher } from 'components';
import { Wrapper } from './TopBar.styles';

export const TopBar = () => {
  return (
    <Wrapper>
      <Logo />
      <Searcher />
    </Wrapper>
  );
};
