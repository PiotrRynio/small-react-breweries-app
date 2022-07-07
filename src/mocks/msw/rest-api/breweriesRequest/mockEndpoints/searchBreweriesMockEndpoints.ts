import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, SEARCH_BREWERIES_PATH } from 'constants/restApiPaths';
import { BreweriesDto } from 'types';

export const getSearchBreweriesWillReturn = (exampleResponse: BreweriesDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getSearchBreweriesIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getSearchBreweriesWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${SEARCH_BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
