import styled from 'styled-components';

export const StyledInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#fff'};
  padding: 0.5rem;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  border-width: 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  line-height: 2;

  &:focus {
    border-width: 0px;
    background-color: #fff;
    box-shadow: none;
    outline: 0;
  }
`;

export const StyledChatbotPhoneInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  && {
    background-color: #333;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 8px;
    border-width: 0;
    width: 100%;
    margin: 0;
    color: #FFF;
    flex: 1;
    border-radius: ${props => props.actionButton ? '8px 0 0 8px' : '8px'};

    &:disabled {
      opacity: 1;
    }

    &:focus {
      border-width: 0px;
      box-shadow: none;
    }

    &:hover {
      border-width: 0px;
      box-shadow: none;
    }

    & ~ button {
      flex: 0.4;
      margin: 0;
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const StyledInputNoLeftRadius = styled(StyledInput)`
  border-radius: 0 8px 8px 0;
`;

export const StyledDraggableInput = styled(StyledInput)`
  border-radius: 0 8px 8px 0;
  padding-left: 5px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
  position: relative;
  margin: ${ props => props.noMargin ? '0' : '0.5rem 0 1rem 0' };
  width: 100%;
`;

export const StyledErrorMessage = styled.span`
  border-radius: 5px;
  text-align: center;
  background-color: #E74C0A;
  font-size: 12px;
  padding: 6px 12px;
  position: absolute;
  right: 5px;
  top: -5px;
`;

export const InputPrefix = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  justify-content: center;
  width: 3rem;
  background-color: rgba(53, 53, 63, 0.45);
  color: #fff; 
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  line-height: 2;
  
  img {
    display: flex;
  }
`;

export const InputPrefixInline = styled(InputPrefix)`
  background-color: #fff;
  width: 34px;
`;

export const ColorBox = styled.div`
  border-radius: 8px;
  background-color: ${ props => props.color ? props.color : '#0078F5' };
  position: absolute;
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

