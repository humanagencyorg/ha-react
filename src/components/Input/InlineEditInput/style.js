import styled from 'styled-components';

import {
  InputPrefix,
  InputWrapper,
  StyledInputNoLeftRadius,
} from '../style';

export const InlineEditInputPrompt = styled.div`
  background-color: unset;
  color: rgba(255, 255, 255, 0.6);
  padding: 6px 15px 6px 0;
  font-size: 18px;
  font-weight: 500;
  border-width: 0;
  width: 100%;
  margin: 0;
  line-height: 2;
  border-radius: 0 8px 8px 0;
  letter-spacing: -0.5px;
`;

export const Prefix = styled(InputPrefix)`
  color: #000;
  background-color: unset;
  font-size: 18px;
  font-weight: 500;
  width: 2rem;
  margin-left: 8px;
  padding-top: 2px;
`;

export const DisabledPrefix = styled(Prefix)`
  color: rgba(255, 255, 255, 0.8);
`;

export const InputField = styled(StyledInputNoLeftRadius)`
  color: #000;
  background-color: unset;
  padding-left: 0;
  -moz-appearance:textfield;

  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &::placeholder {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
`;

export const InlineEditInputWrapper = styled(InputWrapper)`
  margin-bottom: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  border-radius: 8px;
  transform: scale(1);
  transition: transform 0.1s;
  background-color: ${(props) =>
    props.isChecked ? '#fff' : 'rgba(0,0,0,0.2)'};

  &:hover {
    transform: scale(1.01);
    transition: transform 0.1s;
    color: rgba(255, 255, 255, 0.8);
    border: 1px solid #fff;
  }
`;

export const Postfix = styled(Prefix)`
  margin-left: 0;
  margin-right: 12px;
  font-size: 12px;
  text-transform: uppercase;
`;

export const DisabledPostfix = styled(Postfix)`
  color: rgba(255, 255, 255, 0.8);
`;
