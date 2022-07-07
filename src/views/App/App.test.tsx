import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import { getSearchBreweriesWillReturn } from '../../mocks/msw/rest-api/breweriesRequest/mockEndpoints/searchBreweriesMockEndpoints';
import { breweriesResponse } from '../../mocks/msw/rest-api/breweriesRequest/responses/breweriesResponse';
import { getBreweryByIdIsLoading } from '../../mocks/msw/rest-api/breweriesRequest/mockEndpoints/breweryByIdMockEndpoints';
import { getBreweriesWillReturn } from '../../mocks/msw/rest-api/breweriesRequest/mockEndpoints/breweriesMockEndpoints';
import { App } from './App';

describe(`<App>`, () => {
  it('renders correctly', async () => {
    // given
    getBreweriesWillReturn(breweriesResponse);
    getSearchBreweriesWillReturn(breweriesResponse);

    // when
    render(<App />);

    // then
    screen.getByRole('img', { name: /Brewery App Logo/i });
    screen.getByLabelText(/searcher/i);
    screen.getByRole('heading', { name: /Breweries/i, level: 2 });
    expect(await screen.findByText(/Banjo Brewing/i)).toBeVisible();
  });

  it(`shows loading status, if you searching`, async () => {
    // given
    getBreweryByIdIsLoading();
    const user = userEvent.setup();
    render(<App />);
    const searcher = await screen.findByLabelText(/searcher/i);

    // when
    await user.type(searcher, 'dog');

    // then
    expect(searcher).toHaveValue('dog');
    expect(await screen.findByText(/Loading/i)).toBeVisible();
  });

  it(`shows items, if you search 'dog' and loading status disappear`, async () => {
    // given
    getBreweriesWillReturn(breweriesResponse);
    getSearchBreweriesWillReturn(breweriesResponse);
    const user = userEvent.setup();
    render(<App />);
    const searcher = await screen.findByLabelText(/searcher/i);

    // when
    await user.type(searcher, 'dog');

    // then
    expect(await screen.findByText(/Banjo Brewing/i)).toBeVisible();
  });
});
