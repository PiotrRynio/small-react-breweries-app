import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, BREWERIES_PATH } from 'constants/restApiPaths';
import { BreweriesDto } from 'types';

export const getBreweriesWillReturn = (exampleResponse: BreweriesDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getBreweriesIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getBreweriesWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
