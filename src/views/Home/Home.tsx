import { useEffect } from 'react';
import { usePageTitle } from 'hooks';
import { APP_NAME } from 'constants/names';

export const Home = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Searcher | ${APP_NAME}`);
  }, [setPageTitle]);

  return <div>Home</div>;
};
