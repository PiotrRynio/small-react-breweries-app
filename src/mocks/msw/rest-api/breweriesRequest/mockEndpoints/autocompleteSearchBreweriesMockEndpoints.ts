import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, AUTOCOMPLETE_SEARCH_BREWERIES_PATH } from 'constants/restApiPaths';
import { AutocompleteSearchBreweriesDto } from 'types';

export const getAutocompleteSearchBreweriesWillReturn = (exampleResponse: AutocompleteSearchBreweriesDto[]) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${AUTOCOMPLETE_SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getAutocompleteSearchBreweriesIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${AUTOCOMPLETE_SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getAutocompleteSearchBreweriesWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${AUTOCOMPLETE_SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
