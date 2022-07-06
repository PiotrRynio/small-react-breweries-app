import styled from 'styled-components';

export const LogoImage = styled.img`
  display: block;
  height: 38px;
  width: 38px;
  transform: rotate(30deg);
  animation: drink 8.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;

  @keyframes drink {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
  }

  &:hover {
    animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;

    @keyframes shake {
      0% {
        transform: translate3d(0, 0, 0);
      }

      5%,
      45% {
        transform: translate3d(-1px, 0, 0);
      }

      10%,
      40% {
        transform: translate3d(2px, 0, 0);
      }

      15%,
      25%,
      35% {
        transform: translate3d(-4px, 0, 0);
      }

      20%,
      30% {
        transform: translate3d(4px, 0, 0);
      }
    }
  }
`;
