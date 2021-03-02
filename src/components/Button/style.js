import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 2;
  color: #727278;
  padding: 0.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#F2F2F2'};
  border: 1px solid transparent;
  border-radius: 0.5rem;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  transition: background-color 150ms ease;
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;

  &:hover {
    color: #727278;
    background-color: ${lighten(0.05, '#F2F2F2')};
  }

  &:focus {
    outline: 0;
  }

  ${(props) =>
    props.responsive &&
    `
    padding: 1rem;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    margin: 0;
    padding: 1rem;
    z-index: 1;
    box-shadow: 0 -15px 10px 0 rgba(0, 0, 0, 0.15);


    @media (min-width: 600px) {
      border-radius: 8px;
      box-shadow: none;
      margin: 0.5rem 0 1rem;
      position: static;
      z-index: 0;
    }
  `}
`;

export const StyledWhiteButton = styled(StyledButton)`
  color: #727278;

  &:hover,
  &:hover:disabled {
    color: #727278;
    background-color: ${lighten(0.05, '#F2F2F2')};
  }
`;

export const StyledChatbotLoadingButton = styled(StyledButton)`
  position: relative;
  background-color: #bdbdbd;
  color: #fff;
  opacity: 1 !important;

  &&:hover {
    background-color: ${lighten(0.05, '#BDBDBD')};
    color: #fff;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#0078F5'};
  color: #fff;

  &&:hover {
    background-color: ${(props) =>
      props.backgroundColor ?
        darken(0.1, props.backgroundColor) :
        darken(0.1, '#0078F5')};
    color: #fff;
  }

  &:disabled {
    background-color: #333;
    color: #bdbdbd;
    cursor: not-allowed;

    &:hover {
      background-color: #242424;
      color: #9c9c9c;
    }
  }
`;

export const StyledSubmissionButton = styled(StyledPrimaryButton)`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#0078F5'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease;
  margin-bottom: 0;

  &&:hover {
    background-color: ${(props) =>
      props.backgroundColor ?
        darken(0.1, props.backgroundColor) :
        darken(0.1, '#0078F5')};
    color: #fff;
    transform: scale(1.03);
  }
`;

export const StyledNewItemButton = styled(StyledButton)`
  background-color: rgba(53, 53, 63, 0.45);
  color: #fff;
  box-shadow: none;
  justify-content: left;
  border-width: 1px;
  border-style: dashed;
  border-color: rgba(255, 255, 255, 0.6);
  display: flex;
  margin: ${(props) => (props.noMargin ? '0' : '0.5rem 0 1rem 0')};

  &:hover {
    background-color: ${darken(0.1, '#35353f73')};
    color: #fff;
  }
`;

export const StyledSmallDeleteButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #ff432e;
  width: 25px;
  height: 25px;
  padding: 0.5rem;
  border: 2px solid #fff;
  border-radius: 50%;
  line-height: 5px;
  cursor: pointer;
  transition: background-color 150ms ease;

  &:hover {
    background-color: ${darken(0.15, '#ff432e')};
  }

  &:focus {
    outline: 0;
  }
`;

export const StyledLinkButton = styled.a`
  -webkit-font-smoothing: antialiased;
  appearance: none;
  background-color: #f2f2f2;
  border-radius: 8px;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  margin: 0.5rem 0 1rem;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  &:hover {
    background-color: ${lighten(0.05, '#F2F2F2')};
    color: #000;
  }

  &:active {
    background-color: #eee;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      background-color: #fff;
    }
  }
`;

export const StyledPrimaryLinkButton = styled(StyledLinkButton)`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#0078F5'};
  color: #fff;

  &&:hover {
    background-color: ${(props) =>
      props.backgroundColor ?
        darken(0.1, props.backgroundColor) :
        darken(0.1, '#0078F5')};
    color: #fff;
  }
`;
