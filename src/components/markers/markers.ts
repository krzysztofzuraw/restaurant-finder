import { css, keyframes } from 'react-emotion';

const pulse = keyframes`
  0% {
      box-shadow: 0 0 0 0 rgba(36, 112, 216, 0.4);
  }
  70% {
      box-shadow: 0 0 0 30px rgba(36, 112, 216, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(36, 112, 216, 0);
  }
`;

const baseMarker = css`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: rgb(36, 112, 216);
  cursor: pointer;
  box-shadow: 0 0 0 rgba(36, 112, 216, 0.4);
`;

const currentLocation = css`
  ${baseMarker};
  animation: ${pulse} 2s infinite;

  &:hover {
    animation: none;
  }
`;

export const getCurrentLocationMarker = () => {
  const element = document.createElement('div');
  element.className = `${currentLocation}`;
  return element;
};

export const getLocationMarker = () => {
  const element = document.createElement('div');
  element.className = `${baseMarker}`;
  return element;
};
