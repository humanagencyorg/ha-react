import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PulseLoader from 'react-spinners/PulseLoader';

const DEFAULT_LOADER_SIZE = 10;
const DEFAULT_LOADER_COLOR = '#61616a';
const StyledLoader = styled.div`
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);
`;
function Loader({ loaderWrapper, loader }) {
  return (
    <StyledLoader {...loaderWrapper}>
      <PulseLoader
        size={DEFAULT_LOADER_SIZE}
        color={DEFAULT_LOADER_COLOR}
        {...loader}
      />
    </StyledLoader>
  );
}

Loader.propTypes = {
  loaderWrapper: PropTypes.object,
  loader: PropTypes.object,
};

export default Loader;
