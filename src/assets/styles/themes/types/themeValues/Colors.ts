export type Color =
  | 'primaryText'
  | 'secondaryText'
  | 'secondaryTextWithHover'
  | 'linkText'
  | 'searcher'
  | 'searcherBackground'
  | 'background'
  | 'backgroundWithHover'
  | 'topBarBackground'
  | 'border'
  | 'scrollbarTrackPiece'
  | 'scrollbarThumb';

export type Colors = Record<Color, string>;
