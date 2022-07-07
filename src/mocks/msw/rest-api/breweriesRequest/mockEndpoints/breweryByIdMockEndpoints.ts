import { rest } from 'msw';
import { server } from 'mocks/msw/rest-api/server';
import { REST_API_BASE_URL, BREWERIES_PATH } from 'constants/restApiPaths';
import { BreweryDto } from 'types';

export const getBreweryByIdWillReturn = (exampleResponse: BreweryDto) => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(exampleResponse));
    }),
  );
};

export const getBreweryByIdIsLoading = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.delay('infinite'));
    }),
  );
};

export const getBreweryByIdWillReturnFail = () => {
  server.use(
    rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}`, (req, res, ctx) => {
      return res(ctx.status(404));
    }),
  );
};
