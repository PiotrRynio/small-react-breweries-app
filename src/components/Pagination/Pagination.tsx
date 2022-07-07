import { StyledButton, StyledTypography, Wrapper } from './Pagination.styles';
import { ChevronIcon } from 'components';

export type PaginationProps = {
  currentPageNumber: number;
  onPageSelect: (pageNumber: number) => void;
  isNextPageExists?: boolean;
};

export const Pagination = ({ isNextPageExists = false, currentPageNumber, onPageSelect }: PaginationProps) => {
  const isPreviousPageExists = currentPageNumber > 1;

  const handlePreviousPageClick = () => {
    if (isPreviousPageExists) {
      onPageSelect(currentPageNumber - 1);
    }
  };

  const handleNextPageClick = () => {
    if (isNextPageExists) {
      onPageSelect(currentPageNumber + 1);
    }
  };

  return (
    <Wrapper>
      <StyledButton isDisabled={!isPreviousPageExists} onClick={handlePreviousPageClick}>
        <StyledTypography variant="body1" isDisabled={!isPreviousPageExists}>
          <ChevronIcon direction="left" ariaLabel="next page" /> Previous
        </StyledTypography>
      </StyledButton>
      <div>
        <StyledTypography variant="body1" isDisabled>
          | {currentPageNumber} |{' '}
        </StyledTypography>
      </div>
      <StyledButton isDisabled={!isNextPageExists} onClick={handleNextPageClick}>
        <StyledTypography isDisabled={!isNextPageExists} variant="body1">
          Next <ChevronIcon direction="right" ariaLabel="next page" />
        </StyledTypography>
      </StyledButton>
    </Wrapper>
  );
};
