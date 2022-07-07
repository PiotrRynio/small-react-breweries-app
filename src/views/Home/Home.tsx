import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { APP_NAME } from 'constants/names';
import { SEARCHED_BREWERY_TEXT_ID, PAGE_NUMBER } from 'constants/urlParameters';
import { usePageTitle, useBreweries } from 'hooks';
import { FetchingStatus, Link, Pagination, Typography } from 'components';
import { formattedLastUpdateDate } from 'utils';
import { BreweriesList, BreweriesListItem, StyledNameTypography, Wrapper } from './Home.styles';

export const Home = () => {
  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(`Searcher | ${APP_NAME}`);
  }, [setPageTitle]);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPageNumber = Number(searchParams.get(PAGE_NUMBER)) || 1;

  const { data, isError, isLoading } = useBreweries({
    pageNumber: currentPageNumber,
    searchedText: searchParams.get(SEARCHED_BREWERY_TEXT_ID) || '',
  });

  const handlePaginationPageSelect = (pageNumber: number) => {
    const params = {
      [SEARCHED_BREWERY_TEXT_ID]: searchParams.get(SEARCHED_BREWERY_TEXT_ID) || '',
      [PAGE_NUMBER]: `${pageNumber}`,
    };
    setSearchParams(params);
  };

  return (
    <Wrapper>
      <Typography variant="title">Breweries: </Typography>
      <Pagination
        currentPageNumber={currentPageNumber}
        isNextPageExists={data?.isNextPage}
        onPageSelect={handlePaginationPageSelect}
      />

      <BreweriesList>
        {(isLoading || isError) && <FetchingStatus status={isLoading ? 'loading' : 'error'} />}

        {data?.breweries.map((brewery) => (
          <BreweriesListItem key={brewery.id}>
            <Link to={`/brewery/${brewery.id}`}>
              <StyledNameTypography variant={'body1'}>{brewery.name}</StyledNameTypography>

              <StyledNameTypography variant={'body2'}>
                {brewery.country} | City: {brewery.city} | Last update: {formattedLastUpdateDate(brewery.updatedAt)}
              </StyledNameTypography>
            </Link>
          </BreweriesListItem>
        ))}
      </BreweriesList>
    </Wrapper>
  );
};
