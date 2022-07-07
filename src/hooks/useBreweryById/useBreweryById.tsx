import { useQuery, UseQueryResult } from 'react-query';
import { BREWERIES_PATH, REST_API_BASE_URL } from 'constants/restApiPaths';
import { REST_API_HEADERS } from 'constants/headers';
import { BreweryDto } from 'types';

export type UseBreweryById = {
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

export const useBreweryById = (breweryId: string): UseQueryResult<UseBreweryById> =>
  useQuery([`useBreweryById`, breweryId], async (): Promise<UseBreweryById> => {
    const breweryDto: BreweryDto = await fetch(
      `${REST_API_BASE_URL}${BREWERIES_PATH}/${breweryId}`,
      REST_API_HEADERS,
    ).then((response) => response.json());

    return {
      id: breweryDto.id,
      name: breweryDto.name,
      breweryType: breweryDto.brewery_type,
      street: breweryDto.street || undefined,
      city: breweryDto.city,
      state: breweryDto.state,
      countyProvince: breweryDto.county_province || undefined,
      postalCode: breweryDto.postal_code,
      country: breweryDto.country,
      longitude: breweryDto.longitude || undefined,
      latitude: breweryDto.latitude || undefined,
      phone: breweryDto.phone || undefined,
      websiteUrl: breweryDto.website_url || undefined,
      updatedAt: new Date(breweryDto.updated_at),
      createdAt: new Date(breweryDto.created_at),
    };
  });
