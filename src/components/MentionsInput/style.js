import styled from 'styled-components';
import { Textarea } from '../Globals';
import { X, Search } from 'react-feather';

export const StyledTextarea = styled(Textarea)`
  border-radius: 8px 8px 0px 0px;
  padding: 12px 16px;
  box-sizing: border-box;

  &:focus {
    box-shadow: none;
  }

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ClearIcon = styled(X)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #333;
  opacity: 0.6;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: #727278;
  opacity: 0.6;
  cursor: pointer;
`;
