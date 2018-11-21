import * as React from 'react';
import { ClipLoader } from 'react-spinners';
import { styled } from '~src/theme';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Loader: React.SFC = () => (
  <Wrapper>
    <ClipLoader size={150} color="#2470d8" />
  </Wrapper>
);
