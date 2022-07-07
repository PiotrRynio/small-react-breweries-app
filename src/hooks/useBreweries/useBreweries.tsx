import { useQuery, UseQueryResult } from 'react-query';
import { BREWERIES_PATH, REST_API_BASE_URL, SEARCH_BREWERIES_PATH } from 'constants/restApiPaths';
import { REST_API_HEADERS } from 'constants/headers';
import { BreweriesDto } from 'types';

export type Brewery = {
  id: string;
  name: string;
  breweryType: string;
  street?: string;
  city: string;
  state: string;
  countyProvince?: string;
  postalCode: string;
  country: string;
  longitude?: string;
  latitude?: string;
  phone?: string;
  websiteUrl?: string;
  updatedAt: Date;
  createdAt: Date;
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
      breweryType: brewery.brewery_type,
      street: brewery.street || undefined,
      city: brewery.city,
      state: brewery.state,
      countyProvince: brewery.county_province || undefined,
      postalCode: brewery.postal_code,
      country: brewery.country,
      longitude: brewery.longitude || undefined,
      latitude: brewery.latitude || undefined,
      phone: brewery.phone || undefined,
      websiteUrl: brewery.website_url || undefined,
      updatedAt: new Date(brewery.updated_at),
      createdAt: new Date(brewery.created_at),
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
