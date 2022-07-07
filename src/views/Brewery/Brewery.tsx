import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { usePageTitle, useBreweryById } from 'hooks';
import { Link, Typography } from 'components';
import { APP_NAME } from 'constants/names';
import { StyledDetailsTypography, StyledFieldName, TextRow, Wrapper } from './Brewery.styles';
import { formattedLastUpdateDate } from 'utils';

export const Brewery = () => {
  const breweryId = useMatch('/brewery/:breweryId')?.params.breweryId;

  const { data, isLoading, isError } = useBreweryById(breweryId || '');

  const { setPageTitle } = usePageTitle();
  useEffect(() => {
    setPageTitle(data ? `${data.name} | ${APP_NAME}` : undefined);
  }, [data]);

  if (isLoading) {
    return (
      <Wrapper>
        <Typography variant="body1"> Loading...</Typography>
      </Wrapper>
    );
  }

  if (isError || !data) {
    return (
      <Wrapper>
        <Typography variant="body1"> Error...</Typography>
      </Wrapper>
    );
  }

  const { city, state, name, postalCode, street, latitude, country, longitude, phone, websiteUrl, updatedAt, id } =
    data;

  const noInformationText = "'N/A'";
  return (
    <Wrapper>
      <Typography variant="title"> {name}</Typography>
      <TextRow>
        <StyledFieldName variant="body2">Id: </StyledFieldName>
        <StyledDetailsTypography variant="body2"> {id}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Phone: </StyledFieldName>
        <StyledDetailsTypography variant="body2"> {phone || noInformationText}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Website: </StyledFieldName>
        <StyledDetailsTypography variant="body2">
          {websiteUrl ? (
            <Link to={websiteUrl} isExternalLink>
              {websiteUrl}
            </Link>
          ) : (
            noInformationText
          )}
        </StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Street: </StyledFieldName>
        <StyledDetailsTypography variant="body2">{street || noInformationText}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">City: </StyledFieldName>
        <StyledDetailsTypography variant="body2"> {city}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">State: </StyledFieldName>
        <StyledDetailsTypography variant="body2"> {state}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Code: </StyledFieldName>
        <StyledDetailsTypography variant="body2"> {postalCode}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Country:</StyledFieldName>
        <StyledDetailsTypography variant="body2">{country}</StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Coordinates: </StyledFieldName>
        <StyledDetailsTypography variant="body2">
          {latitude} | {longitude}
        </StyledDetailsTypography>
      </TextRow>
      <TextRow>
        <StyledFieldName variant="body2">Last update: </StyledFieldName>
        <StyledDetailsTypography variant="body2">{formattedLastUpdateDate(updatedAt)}</StyledDetailsTypography>
      </TextRow>
    </Wrapper>
  );
};
