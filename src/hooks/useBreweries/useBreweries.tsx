import { useQuery, UseQueryResult } from 'react-query';
import { BREWERIES_PATH, REST_API_BASE_URL, SEARCH_BREWERIES_PATH } from 'constants/restApiPaths';
import { REST_API_HEADERS } from 'constants/headers';
import { BreweriesDto } from 'types';

export type Brewery = {
  id: string;
  name: string;
  city: string;
  country: string;
  updatedAt: Date;
};

export type UseBreweries = {
  breweries: Brewery[];
  isNextPage: boolean;
};

export type UseBreweriesProps = {
  searchedText?: string;
  pageNumber?: number;
};

export const useBreweries = ({ searchedText = '', pageNumber = 1 }: UseBreweriesProps): UseQueryResult<UseBreweries> =>
  useQuery([`useBreweriesSearcher`, searchedText, pageNumber], async (): Promise<UseBreweries> => {
    const perPage = 50;
    const isAllQuery = !searchedText;
    const currentSearchedQuery = isAllQuery
      ? `${REST_API_BASE_URL}${BREWERIES_PATH}?page=${pageNumber}&per_page=${perPage}&sort=type,name:asc`
      : `${REST_API_BASE_URL}${SEARCH_BREWERIES_PATH}?query=${searchedText}&page=${pageNumber}&per_page=${perPage}&sort=type,name:asc`;

    const breweriesDto: BreweriesDto = await fetch(currentSearchedQuery, REST_API_HEADERS).then((response) =>
      response.json(),
    );

    const breweries: Brewery[] = breweriesDto.map((brewery) => ({
      id: brewery.id,
      name: brewery.name,
      city: brewery.city,
      country: brewery.country,
      updatedAt: new Date(brewery.updated_at),
    }));

    const orderNumberOfFirstItemInNextPage = pageNumber * perPage + 1;
    const nextPageQuery = isAllQuery
      ? `${REST_API_BASE_URL}${BREWERIES_PATH}?page=${orderNumberOfFirstItemInNextPage}&per_page=${1}&sort=name:asc`
      : `${REST_API_BASE_URL}${SEARCH_BREWERIES_PATH}?query=${searchedText}&page=${orderNumberOfFirstItemInNextPage}&per_page=${1}&sort=name:asc`;

    const isNextPage: boolean =
      breweries.length === perPage
        ? await fetch(nextPageQuery, REST_API_HEADERS)
            .then((response) => response.json())
            .then((nextPageBreweriesDto: BreweriesDto) => !!nextPageBreweriesDto.length)
        : false;

    return {
      breweries,
      isNextPage,
    };
  });
