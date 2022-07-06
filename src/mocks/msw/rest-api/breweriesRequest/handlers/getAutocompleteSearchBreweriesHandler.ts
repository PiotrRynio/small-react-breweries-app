import { rest } from 'msw';
import { REST_API_BASE_URL, AUTOCOMPLETE_SEARCH_BREWERIES_PATH } from 'constants/restApiPaths';
import { breweriesResponse } from '../responses/breweriesResponse';

export const getAutocompleteSearchBreweriesHandler = rest.get(
  `${REST_API_BASE_URL}${AUTOCOMPLETE_SEARCH_BREWERIES_PATH}`,
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(breweriesResponse));
  },
);
