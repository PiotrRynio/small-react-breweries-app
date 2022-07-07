import { Logo, Searcher } from 'components';
import { Wrapper } from './TopBar.styles';

type TopBarProps = {
  isSearcher?: boolean;
};

export const TopBar = ({ isSearcher = false }: TopBarProps) => {
  return (
    <Wrapper>
      <Logo />
      {isSearcher ? <Searcher /> : null}
    </Wrapper>
  );
};
