import React from 'react';

import { StyledErrorMessage } from '../style';
import {
  InlineEditInputPrompt,
  Prefix,
  DisabledPrefix,
  InlineEditInputWrapper,
  InputField,
  Postfix,
  DisabledPostfix,
} from './style';

const activeInputField = (props) => {
  return (
    <>
      <Prefix>{props.icon}</Prefix>
      <InputField {...props} />
      {props.error ? (
        <StyledErrorMessage>{props.error}</StyledErrorMessage>
      ) : null}
      <Postfix>{props.postfixIcon}</Postfix>
    </>
  );
};

const disabledInputField = (props) => {
  return (
    <>
      <DisabledPrefix>{props.icon}</DisabledPrefix>
      <InlineEditInputPrompt {...props}>{props.placeholder}</InlineEditInputPrompt>
      <DisabledPostfix>{props.postfixIcon}</DisabledPostfix>
    </>
  );
};

const InlineEditInput = (props) => {
  const { isChecked, noMargin } = props;
  const amountInputProps = {
    isChecked,
    noMargin,
  };

  return (
    <InlineEditInputWrapper {...amountInputProps}>
      {isChecked ?
        activeInputField(props, amountInputProps) :
        disabledInputField(props, amountInputProps)}
    </InlineEditInputWrapper>
  );
};

export default InlineEditInput;
