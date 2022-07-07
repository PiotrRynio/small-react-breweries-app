import { rest } from 'msw';
import { REST_API_BASE_URL, BREWERIES_PATH } from 'constants/restApiPaths';
import { breweryResponse } from '../responses/breweryByIdResponse';

export const getBreweriesHandler = rest.get(`${REST_API_BASE_URL}${BREWERIES_PATH}/:breweryId`, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(breweryResponse));
});
