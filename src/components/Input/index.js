import React from 'react';
import Loader from '../Loader';

import {
  InputWrapper,
  StyledInput,
  StyledErrorMessage,
} from './style';

export const Input = (props) => {
  return (
    <InputWrapper noMargin={props.noMargin}>
      {props.isLoading && (<Loader {...props} />)}
      <StyledInput {...props} />
      { props.error ?
        <StyledErrorMessage>{props.error}</StyledErrorMessage> :
        null
      }
    </InputWrapper>
  );
};

