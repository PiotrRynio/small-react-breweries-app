import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEARCHED_BREWERY_TEXT_ID, PAGE_NUMBER } from 'constants/urlParameters';
import { useDebounce } from 'hooks';
import { SearchIcon } from 'components';
import { StyledLabel, StyledInput, IconContainer } from './Searcher.styles';

export const Searcher = () => {
  const [, setSearchParams] = useSearchParams();

  const { debouncingValue, debouncedValue, setDebouncingValue, isDebouncing } = useDebounce<string>({
    initialValue: '',
    delay: 1000,
  });

  useEffect(() => {
    if (!isDebouncing) {
      const searchedBreweryText = debouncedValue.trim().replace(/\s+/g, ' ');
      const params = { [SEARCHED_BREWERY_TEXT_ID]: searchedBreweryText, [PAGE_NUMBER]: '1' };
      setSearchParams(params);
    }
  }, [isDebouncing]);

  const handleSearcherValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDebouncingValue(value);
  };

  return (
    <StyledLabel>
      <StyledInput
        type="text"
        placeholder=""
        value={debouncingValue}
        onChange={handleSearcherValueChange}
        aria-label="searcher"
      />

      <IconContainer isClickable>
        <SearchIcon ariaLabel="search" />
      </IconContainer>
    </StyledLabel>
  );
};
