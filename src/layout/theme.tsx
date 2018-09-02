import styled, { CreateStyled } from 'react-emotion';

interface Theme {
  color: {
    blue: '#2470D8';
  };
  fontSize: {
    large: '2.5em';
  };
}

export default styled as CreateStyled<Theme>;
