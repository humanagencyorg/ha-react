import React from 'react';
import Loader from '../Loader';
import dragIcon from '../../assets/icons/icon--drag.svg';
import Icon from '../Icon';

import {
  InputWrapper,
  StyledInput,
  StyledChatbotPhoneInput,
  StyledErrorMessage,
  InputPrefix,
  InputPrefixInline,
  StyledInputNoLeftRadius,
  StyledDraggableInput,
  ColorBox,
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

export const ChatbotPhoneInput = (props) => {
  return (
    <InputWrapper noMargin={props.noMargin}>
      {props.isLoading && (<Loader {...props} />)}
      <StyledChatbotPhoneInput {...props} />
      {props.actionButton}
      { props.error ?
        <StyledErrorMessage>{props.error}</StyledErrorMessage> :
        null
      }
    </InputWrapper>
  );
};

export const InputWithIcon = (props) => {
  return (
    <InputWrapper noMargin={props.noMargin}>
      <InputPrefix>
        {props.icon}
      </InputPrefix>
      <StyledInputNoLeftRadius {...props} />
      { props.error ?
        <StyledErrorMessage>{props.error}</StyledErrorMessage> :
        null
      }
    </InputWrapper>
  );
};

export const DraggableInput = (props) => {
  return (
    <InputWrapper noMargin={props.noMargin}>
      <InputPrefixInline>
        <Icon src={dragIcon} />
      </InputPrefixInline>
      <StyledDraggableInput {...props} />
      { props.error ?
        <StyledErrorMessage>{props.error}</StyledErrorMessage> :
        null
      }
    </InputWrapper>
  );
};

export const ColorInput = (props) => {
  return (
    <>
      <InputWrapper noMargin={props.noMargin}>
        <ColorBox color={props.color} />
        <StyledInput
          maxLength={7}
          style={{paddingLeft: '3rem'}}
          {...props}
        />
        { props.error ?
          <StyledErrorMessage>{props.error}</StyledErrorMessage> :
          null
        }
      </InputWrapper>
    </>
  );
};
