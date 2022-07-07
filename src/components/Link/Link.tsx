import { ReactNode } from 'react';
import { StyledExternalLink, StyledLink } from './Link.styles';

export type LinkProps = {
  children: ReactNode;
  to: string;
  isExternalLink?: boolean;
};

export const Link = ({ children, to, isExternalLink = false }: LinkProps) => {
  if (isExternalLink) {
    return (
      <StyledExternalLink href={to} target="_blank">
        {children}
      </StyledExternalLink>
    );
  }
  return <StyledLink to={to}>{children}</StyledLink>;
};
