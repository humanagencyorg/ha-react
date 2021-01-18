import React from 'react';
import Loader from '../Loader';

import {
  StyledWhiteButton,
  StyledPrimaryButton,
  StyledSubmissionButton,
  StyledNewItemButton,
  StyledSmallDeleteButton,
  StyledLinkButton,
  StyledPrimaryLinkButton,
  StyledChatbotLoadingButton,
} from './style';

const loadingButtonWrapper = (Component, props) => {
  const { children, isLoading } = props;
  const button = (
    <Component {...props}>
      {children}
      {isLoading && (<Loader {...props} />)}
    </Component>
  );

  return button;
};

const buttonWrapper = (Component, props) => {
  const { children } = props;
  const button = (
    <Component {...props}>
      {children}
    </Component>
  );

  return button;
};

export const Button = (props) => buttonWrapper(StyledWhiteButton, props);

export const PrimaryButton = (props) => buttonWrapper(StyledPrimaryButton, props);

export const SubmissionButton = (props) => buttonWrapper(StyledSubmissionButton, props);

export const NewItemButton = (props) => buttonWrapper(StyledNewItemButton, props);

export const SmallDeleteButton = (props) => buttonWrapper(StyledSmallDeleteButton, props);

export const LinkButton = (props) => buttonWrapper(StyledLinkButton, props);

export const PrimaryLinkButton = (props) => buttonWrapper(StyledPrimaryLinkButton, props);

export const ChatbotLoadingButton = (props) => loadingButtonWrapper(StyledChatbotLoadingButton, props);
