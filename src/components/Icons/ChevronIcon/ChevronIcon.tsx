import { IconProps } from '../IconProps';

type ChevronIconProps = IconProps & { direction: 'left' | 'right' };

export const ChevronIcon = ({
  width = 18,
  height = 18,
  ariaLabel,
  fill = 'currentColor',
  direction,
}: ChevronIconProps) => {
  const rotateValue = () => {
    switch (direction) {
      case 'left':
        return '180';
      default:
        return '0';
    }
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
      transform={`rotate(${rotateValue()})`}
    >
      <title>{ariaLabel}</title>
      <path d="M1 9L5 5L0.999999 1" stroke="#166CD7" fill={fill} />
    </svg>
  );
};
