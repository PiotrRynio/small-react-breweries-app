import { renderHook } from 'test-utils';
import {
  getBreweryByIdIsLoading,
  getBreweryByIdWillReturn,
} from '../../mocks/msw/rest-api/breweriesRequest/mockEndpoints/breweryByIdMockEndpoints';
import { breweryResponse } from '../../mocks/msw/rest-api/breweriesRequest/responses/breweryByIdResponse';
import { UseBreweryById, useBreweryById } from './useBreweryById';

describe('Hook useBreweryById', () => {
  const searchedText = 'dog';

  it(`should render hook`, async () => {
    // given
    getBreweryByIdWillReturn(breweryResponse);

    // when
    renderHook(() => useBreweryById(searchedText));
  });

  it(`should start loading, if you call hook`, async () => {
    // given
    getBreweryByIdIsLoading();

    // when
    const { result } = renderHook(() => useBreweryById(searchedText));

    // then
    expect(result.current.isLoading).toBe(true);
  });

  it('should be fetching data wih success, if you call hook', async () => {
    // given
    getBreweryByIdWillReturn(breweryResponse);

    // when
    const { result, waitFor } = await renderHook(() => useBreweryById(searchedText));
    await waitFor(() => result.current.isSuccess);

    // then
    const { error, isLoading, isLoadingError, isSuccess } = result.current;
    expect(isLoading).toBe(false);
    expect(isLoadingError).toBe(false);
    expect(error).toBe(null);
    expect(isSuccess).toBe(true);
    expect(result.current.isSuccess).toBe(true);
  });

  test('should return correct data, if it finish with success', async () => {
    // given
    getBreweryByIdWillReturn(breweryResponse);
    const { result, waitFor } = await renderHook(() => useBreweryById(searchedText));

    // when
    await waitFor(() => result.current.isSuccess);

    // then
    const {
      id,
      name,
      breweryType,
      country,
      longitude,
      postalCode,
      state,
      countyProvince,
      street,
      phone,
      websiteUrl,
      city,
      latitude,
    } = result.current.data as UseBreweryById;

    expect(id).toBe('banjo-brewing-fayetteville');
    expect(name).toBe('Banjo Brewing');
    expect(breweryType).toBe('planning');
    expect(country).toBe('United States');
    expect(longitude).toBe(undefined);
    expect(postalCode).toBe('25840');
    expect(state).toBe('West Virginia');
    expect(countyProvince).toBe(undefined);
    expect(street).toBe(undefined);
    expect(city).toBe('Fayetteville');
    expect(latitude).toBe(undefined);
    expect(phone).toBe('3042164231');
    expect(websiteUrl).toBe(undefined);
  });
});
